const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python"],
  },
  {
    title: "Herramientas",
    items: ["Git", "GitHub"],
  },
];

export default function SkillsPanel() {
  return (
    <div>
      {skills.map((category) => (
        <div key={category.title}>
          <div>
            <span></span>
            <h3>{category.title}</h3>
          </div>

          <div>
            {category.items.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}