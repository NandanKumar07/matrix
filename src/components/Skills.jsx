import React, { useEffect, useState } from 'react'

const Skills = () => {
  const [loadingProgress, setLoadingProgress] = useState({});

  const skills = {
    "PROGRAMMING LANGUAGES": [
      { name: "C/C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
    "FRAMEWORKS & LIBRARIES": [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Scikit-Learn", level: 75 },
      { name: "NumPy/Pandas", level: 80 },
    ],
    "DATABASES & TOOLS": [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Git/GitHub", level: 90 },
      { name: "Postman", level: 85 },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      Object.values(skills)
        .flat()
        .forEach((skill) => {
          let progress = 0;
          const interval = setInterval(() => {
            progress += 2;
            setLoadingProgress((prev) => ({
              ...prev,
              [skill.name]: Math.min(progress, skill.level),
            }));
            if (progress >= skill.level) {
              clearInterval(interval);
            }
          }, 50);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 flex justify-center items-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-green-400 text-sm">{"> SKILLS_MATRIX.EXE"}</div>
          </div>

          <div className="terminal-content flex flex-col gap-5">
            <div className="mb-6">
              <span className="text-green-300">{"nandan@matrix:~$ "}</span>
              <span className="text-green-400">./scan_abilities.sh</span>
            </div>

            <div className="space-y-8 flex flex-col gap-10">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="text-green-300 text-lg mb-4 font-bold">{"> " + category}</h3>
                  <div className="space-y-3">
                    {skillList.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between text-green-400">
                          <span>{skill.name}</span>
                          <span>{loadingProgress[skill.name] || 0}%</span>
                        </div>
                        <div className="w-full bg-green-900/30 rounded-full h-2 border border-green-400/30">
                          <div
                            className="bg-gradient-to-r from-green-700 to-green-400 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${loadingProgress[skill.name] || 0}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-green-400/70">{"> SCAN COMPLETE. ALL SYSTEMS OPERATIONAL."}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
