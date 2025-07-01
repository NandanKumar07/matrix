export default function Projects() {
  const projects = [
    {
      name: "TinDev",
      period: "Dec 2024 - Jan 2025",
      description: "Developer Matchmaking App",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS"],
      details: [
        "Developed a full-stack matchmaking platform connecting developers based on skills and interests",
        "Implemented secure authentication, real-time interactions, and dynamic user profiles",
        "Optimized database management, API performance, and UI/UX design for seamless experience",
      ],
    },
    {
      name: "Car Price Prediction",
      period: "Sep 2023 - Oct 2023",
      description: "Machine Learning Model",
      tech: ["Python", "NumPy", "Matplotlib"],
      details: [
        "Built a multiple linear regression model from scratch using Python",
        "Achieved 90% accuracy in predicting car prices with the developed model",
        "Utilized Matplotlib for visualizing data relationships and performance metrics",
      ],
    },
    {
      name: "Binary Classification with Bank Churn Dataset",
      period: "Mar 2024 - Apr 2024",
      description: "ML Classification Project",
      tech: ["Python", "Scikit-Learn", "TensorFlow", "Pandas"],
      details: [
        "Built and evaluated logistic regression model using Scikit-Learn, optimizing for accuracy",
        "Designed and fine-tuned neural network in TensorFlow, boosting prediction accuracy",
        "Utilized Pandas and Matplotlib for efficient data preprocessing and visualization",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-green-400 text-sm">{"> PROJECTS_DATABASE.SQL"}</div>
          </div>

          <div className="terminal-content flex flex-col gap-5">
            <div className="mb-6">
              <span className="text-green-300">{"nandan@matrix:~$ "}</span>
              <span className="text-green-400">SELECT * FROM projects ORDER BY date DESC;</span>
            </div>

            <div className="space-y-8 flex flex-col gap-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-green-400/30 m-10 rounded-lg p-6 bg-green-400/5 hover:bg-green-400/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-green-300 font-bold text-xl glitch-text">{"> " + project.name}</h3>
                    <div className="text-green-400/70 text-sm">{project.period}</div>
                  </div>

                  <div className="text-green-400/80 mb-4">{project.description}</div>

                  <div className="mb-4">
                    <div className="text-green-300 text-sm mb-2">{"> TECH_STACK:"}</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-green-400/20 border border-green-400/40 rounded text-green-400 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {project.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-green-400/90 text-sm">
                        {"• " + detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-green-400/70">
              {"> QUERY EXECUTED SUCCESSFULLY. " + projects.length + " RECORDS FOUND."}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
