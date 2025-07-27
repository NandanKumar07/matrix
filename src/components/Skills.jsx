import { useEffect, useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [animatedSkills, setAnimatedSkills] = useState(new Set())
  const [isVisible, setIsVisible] = useState(false)

  const skillCategories = [
    {
      title: "PROGRAMMING LANGUAGES",
      color: "from-green-500 to-emerald-400",
      skills: [
        { name: "C/C++", level: 90, description: "System Programming & DSA" },
        { name: "Python", level: 85, description: "ML & Backend Development" },
        { name: "JavaScript", level: 90, description: "Full Stack Development" },
      ],
    },
    {
      title: "WEB TECHNOLOGIES",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "HTML/CSS", level: 95, description: "Modern Web Standards" },
        { name: "React.js", level: 90, description: "Component-Based UI" },
        { name: "Node.js", level: 85, description: "Server-Side JavaScript" },
        { name: "Express.js", level: 80, description: "Web Framework" },
        { name: "REST APIs", level: 80, description: "API Development" },
        { name: "Redux", level: 80, description: "State Management" },
        { name: "Tailwind CSS", level: 90, description: "Utility-First CSS" },
        { name: "Bootstrap", level: 80, description: "CSS Framework" },
      ],
    },
    {
      title: "FRAMEWORKS & LIBRARIES",
      color: "from-purple-500 to-pink-400",
      skills: [
        { name: "NumPy/Pandas", level: 80, description: "Data Analysis" },
        { name: "Matplotlib", level: 85, description: "Data Visualization" },
        { name: "Streamlit", level: 85, description: "ML Web Apps" },
        { name: "Scikit-Learn", level: 75, description: "Machine Learning" },
      ],
    },
    {
      title: "DATABASES & TOOLS",
      color: "from-orange-500 to-red-400",
      skills: [
        { name: "MongoDB", level: 80, description: "NoSQL Database" },
        { name: "MySQL", level: 75, description: "Relational Database" },
        { name: "Git/GitHub", level: 90, description: "Version Control" },
        { name: "Postman", level: 85, description: "API Testing" },
      ],
    },
  ]

  useEffect(() => {
    setIsVisible(true)

    // Animate skills with staggered delay
    const timer = setTimeout(() => {
      skillCategories[activeCategory].skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills((prev) => new Set([...prev, `${activeCategory}-${skill.name}`]))
        }, index * 200)
      })
    }, 300)

    return () => clearTimeout(timer)
  }, [activeCategory])

  const getSkillBarWidth = (level, skillKey) => {
    return animatedSkills.has(skillKey) ? level : 0
  }

  const getGlowIntensity = (level) => {
    if (level >= 90) return "shadow-md shadow-green-400/40"
    if (level >= 80) return "shadow-md shadow-green-400/40"
    if (level >= 70) return "shadow-md shadow-green-400/40"
    return "shadow-sm shadow-green-400/20"
  }

  return (
    <section id="skills" className="flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-green-400 text-sm">{"> NEURAL_NETWORK_ANALYSIS.EXE"}</div>
          </div>

          <div className="terminal-content !p-8">
            {/* Command Line */}
            <div className="!mb-8">
              <span className="text-green-300">{"nandan@matrix:~$ "}</span>
              <span className="text-green-400">./analyze_skill_matrix --deep-scan</span>
            </div>

            {/* Status Message */}
            <div className="!mb-8 text-green-400/80 !animate-pulse">
              {"> INITIALIZING NEURAL INTERFACE..."}
              <br />
              {"> SCANNING COGNITIVE ABILITIES..."}
              <br />
              {"> MATRIX CONNECTION ESTABLISHED ✓"}
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 !mb-8 border-b border-green-400/20 pb-4">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`!px-4 !py-2 rounded-lg font-mono text-sm transition-all duration-300 flex items-center !gap-2 ${
                    activeCategory === index
                      ? "bg-green-400/20 text-green-300 border border-green-400/40 shadow-lg shadow-green-400/20"
                      : "bg-green-400/5 text-green-400/70 border border-green-400/20 hover:bg-green-400/10 hover:text-green-400"
                  }`}
                >
                  <span className="hidden sm:inline">{category.title}</span>
                </button>
              ))}
            </div>

            {/* Active Category Display */}
            <div
              className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-green-300 mb-2 flex items-center gap-3">
                  {"> " + skillCategories[activeCategory].title}
                </h2>
                <div className="text-green-400/60 !mb-4 text-sm">
                  {"> ANALYZING {skillCategories[activeCategory].skills.length} NEURAL PATHWAYS..."}
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories[activeCategory].skills.map((skill, index) => {
                  const skillKey = `${activeCategory}-${skill.name}`
                  const isAnimated = animatedSkills.has(skillKey)

                  return (
                    <div
                      key={skill.name}
                      className={`group relative bg-black/40 border border-green-400/30 rounded-lg !p-6 
                                hover:border-green-400/60 transition-all duration-500 hover:scale-105
                                ${getGlowIntensity(skill.level)} hover:shadow-xl hover:shadow-green-400/60
                                ${isAnimated ? "animate-fadeInUp" : "opacity-0"}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Skill Header */}
                      <div className="flex justify-between items-start !mb-4">
                        <div>
                          <h3 className="text-green-300 font-bold text-lg group-hover:text-green-200 transition-colors">
                            {skill.name}
                          </h3>
                          <p className="text-green-400/60 text-sm !mt-1">{skill.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-mono text-xl font-bold">
                            {isAnimated ? skill.level : 0}%
                          </div>
                          <div className="text-green-400/50 text-xs">PROFICIENCY</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-green-900/30 rounded-full !h-3 border border-green-400/20 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${skillCategories[activeCategory].color} relative`}
                            style={{
                              width: `${getSkillBarWidth(skill.level, skillKey)}%`,
                              boxShadow: isAnimated ? "0 0 10px rgba(34, 197, 94, 0.5)" : "none",
                            }}
                          >
                            {/* Animated shine effect */}
                            <div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                          transform -skew-x-12 animate-shine"
                            ></div>
                          </div>
                        </div>

                        {/* Skill level indicator */}
                        <div className="flex justify-between text-xs text-green-400/40 !mt-1">
                          <span>NOVICE</span>
                          <span>EXPERT</span>
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                      ></div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Footer Status */}
            <div className="!mt-6 !pt-6 border-t border-green-400/20 text-center">
              <div className="text-green-400/70 !mb-2">{"> NEURAL SCAN COMPLETE. COGNITIVE MATRIX ANALYZED."}</div>
              <div className="text-green-400/50 text-sm">
                {
                  "> TOTAL SKILLS MAPPED: {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} | STATUS: OPERATIONAL"
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
