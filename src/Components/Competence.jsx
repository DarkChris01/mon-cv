import ProgressBar from "./Progress";

// Exemple de section : Compétences techniques
const Skills = () => {
  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 80 },
    { name: "Sveltekit", level: 90 },
    { name: "Laravel", level: 80 },
    { name: "MYSQL", level: 70 },
  ];

  return (
    <section className="mt-6">
      <h2 className="my-8 border-b border-gray-200 text-start">Compétences</h2>
      {skills.map((skill) => (
        <div key={skill.name}>
          <h3 className="flex justify-between items-center">
              {skill.name}
            <span className="text-sm"> 
            {skill.level}%
            </span>
          </h3>
          <ProgressBar skill={skill} />
        </div>
      ))}
    </section>
  );
};

export default Skills