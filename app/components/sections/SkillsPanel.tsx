const skills = [
  {
    title: "FRONTEND",
    color: "purple",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "BACKEND",
    color: "blue",
    items: ["Node.js", "Python"],
  },
  {
    title: "HERRAMIENTAS",
    color: "gray",
    items: ["Git", "GitHub"],
  },
];

export default function SkillsPanel() {
  return (
    <div className="space-y-4">
      {skills.map((category) => (
        <div
          key={category.title}
          className={`
            rounded-[1.25rem] border p-4 md:p-5
            ${category.color === "purple" ? "border-[#e7d8fb] bg-[#f5effd]" : ""}
            ${category.color === "blue" ? "border-[#dbe5ff] bg-[#eef4ff]" : ""}
            ${category.color === "gray" ? "border-[#e5e7eb] bg-[#f7f8fa]" : ""}
          `}
        >
          <div className="mb-4 flex items-center gap-2">
            <span
              className={`
                h-2 w-2 rounded-full
                ${category.color === "purple" ? "bg-[#9333ea]" : ""}
                ${category.color === "blue" ? "bg-[#4f46e5]" : ""}
                ${category.color === "gray" ? "bg-[#64748b]" : ""}
              `}
            />

            <h3
              className={`
                text-[10px] font-extrabold uppercase tracking-wide
                ${category.color === "purple" ? "text-[#9333ea]" : ""}
                ${category.color === "blue" ? "text-[#4f46e5]" : ""}
                ${category.color === "gray" ? "text-[#334155]" : ""}
              `}
            >
              {category.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {category.items.map((skill) => (
              <span
                key={skill}
                className={`
                  rounded-xl border bg-white px-4 py-2 text-sm font-semibold shadow-[0_4px_10px_rgba(15,23,42,0.08)]
                  ${category.color === "purple" ? "border-[#dcc7fb] text-[#9333ea]" : ""}
                  ${category.color === "blue" ? "border-[#c8d7ff] text-[#4f46e5]" : ""}
                  ${category.color === "gray" ? "border-[#d8dee8] text-[#475569]" : ""}
                `}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}