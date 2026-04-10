"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { useTheme } from "next-themes";

interface HexBackgroundProps {
  hue?: number;
  size?: number;
  radius?: number;
  blur?: number;
}

export default function HexBackground({
  hue = 200,
  size = 42,
  radius = 160,
  blur = 8,
}: HexBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const hexesRef = useRef<
    { cx: number; cy: number; glow: number; phase: number }[]
  >([]);
  const cfgRef = useRef({ size, radius, blur, hue });
  const animRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme } = useTheme();
  const resolvedThemeRef = useRef(resolvedTheme);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    resolvedThemeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    cfgRef.current = { size, radius, blur, hue };
  }, [size, radius, blur, hue]);

  const buildGrid = useCallback((W: number, H: number, s: number) => {
    const hexes: typeof hexesRef.current = [];
    const colW = s * Math.sqrt(3);
    const rowH = s * 1.5;
    const cols = Math.ceil(W / colW) + 3;
    const rows = Math.ceil(H / rowH) + 3;
    for (let row = -1; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        const offset = row % 2 === 0 ? 0 : colW / 2;
        hexes.push({
          cx: col * colW + offset,
          cy: row * rowH,
          glow: 0,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
    hexesRef.current = hexes;
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let time = 0;

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
      buildGrid(W, H, cfgRef.current.size);
    }

    function hexPath(cx: number, cy: number, r: number) {
      ctx!.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 180) * (60 * i - 30);
        i === 0
          ? ctx!.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
          : ctx!.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
      }
      ctx!.closePath();
    }

    function easeOut(t: number) {
      return t * (2 - t);
    }

    function loop() {
      time += 0.008;

      const dark = resolvedThemeRef.current === "dark";
      const bg = dark ? "#07090f" : "#f0f2f7";
      const { hue, radius, blur: blurPx } = cfgRef.current;
      const s = cfgRef.current.size - 1;
      const mouse = mouseRef.current;

      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, W, H);

      for (const h of hexesRef.current) {
        h.phase += 0.005;
        const dx = mouse.x - h.cx;
        const dy = mouse.y - h.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / radius);
        const target = easeOut(proximity);
        h.glow += (target - h.glow) * 0.06;

        const ambient =
          (Math.sin(h.phase + h.cx * 0.006 + time) * 0.5 + 0.5) * 0.05;
        const g = h.glow + ambient;

        ctx!.shadowBlur = blurPx * g * 2.2;

        if (dark) {
          ctx!.shadowColor = `hsla(${hue}, 80%, 65%, ${g * 0.6})`;
          hexPath(h.cx, h.cy, s);
          ctx!.strokeStyle = `hsla(${hue}, 65%, ${40 + g * 38}%, ${0.05 + ambient * 0.5 + g * 0.7})`;
          ctx!.lineWidth = 0.5 + g * 1.6;
        } else {
          ctx!.shadowColor = `hsla(${hue}, 70%, 40%, ${g * 0.45})`;
          hexPath(h.cx, h.cy, s);
          ctx!.strokeStyle = `hsla(${hue}, 55%, ${55 - g * 30}%, ${0.08 + ambient * 0.4 + g * 0.65})`;
          ctx!.lineWidth = 0.5 + g * 1.4;
        }
        ctx!.stroke();
      }

      ctx!.shadowBlur = 0;

      if (mouse.x > 0) {
        const grd = ctx!.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 18
        );
        const dark = resolvedThemeRef.current === "dark";
        grd.addColorStop(0, dark
          ? `hsla(${(hue + 30) % 360}, 100%, 88%, 0.9)`
          : `hsla(${hue}, 100%, 30%, 0.7)`
        );
        grd.addColorStop(1, `hsla(${hue}, 100%, 65%, 0)`);
        ctx!.beginPath();
        ctx!.arc(mouse.x, mouse.y, 18, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();
        ctx!.beginPath();
        ctx!.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = dark
          ? `hsla(${(hue + 40) % 360}, 100%, 92%, 1)`
          : `hsla(${hue}, 90%, 25%, 0.9)`;
        ctx!.fill();
      }

      animRef.current = requestAnimationFrame(loop);
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 };
    };
    const onTouch = (e: TouchEvent) => {
      mouseRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchmove", onTouch, { passive: true });

    loop();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [mounted, buildGrid]);

  // No renderizar nada hasta que el cliente esté listo
  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}