import ProjectCard from "./ProjectCard"

export default function Projects() {
  const projects = [
    {
      name: "TinDev",
      description: "Developer Matchmaking App",
      image: "/tindev.png",
      liveLink: "https://tindev-by-nandan.vercel.app/",
      githubLink: "https://github.com/NandanKumar07/TinDev",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    },
    {
      name: "Car Price Prediction",
      image: "/carPrice.png",
      description: "Machine Learning Model",
      tech: ["Python", "NumPy", "Pandas", "Linear Regression", "Matplotlib", "Machine Learning"],
      liveLink: "https://github.com/NandanKumar07/Kaggle_Projects/tree/main/Car_Price_Prediction",
      githubLink: "https://github.com/NandanKumar07/Kaggle_Projects/tree/main/Car_Price_Prediction",
    },
    {
      name: "Bank Churn Classification",
      image: "/bankChurn.png",
      description: "Machine Learning Classification Project",
      tech: ["Python", "Scikit-Learn", "TensorFlow", "Pandas", "matplotlib", "Logistic Regression"],
      liveLink: "https://github.com/NandanKumar07/Kaggle_Projects/tree/main/Binary%20Classification%20with%20a%20Bank%20Churn%20Dataset",
      githubLink: "https://github.com/NandanKumar07/Kaggle_Projects/tree/main/Binary%20Classification%20with%20a%20Bank%20Churn%20Dataset",
    },
    {
      name: "Breast Cancer Classification",
      image: "/breastCancer.png",
      description: "Machine Learning Classification Project",
      tech: ["Python", "Scikit-Learn", "Numpy", "Pandas", "matplotlib", "Logistic Regression"],
      liveLink: "https://github.com/NandanKumar07/Kaggle_Projects/blob/main/Breast%20Cancer%20Classification/Breast_Cancer_Classification.ipynb",
      githubLink: "https://github.com/NandanKumar07/Kaggle_Projects/blob/main/Breast%20Cancer%20Classification/Breast_Cancer_Classification.ipynb",
    },
    {
      name: "Bone Fracture Classification",
      image: "/boneFracture.png",
      description: "Deep Learning Classification Project",
      tech: ["Python", "Numpy", "Pandas", "tensorflow", "scikit-learn", "Deep Learning", "Streamlit"],
      liveLink: "https://github.com/NandanKumar07/Bone-Fracture-Classification-using-Deep-Learning",
      githubLink: "https://github.com/NandanKumar07/Bone-Fracture-Classification-using-Deep-Learning",
    },
    {
      name: "Portfolio Website",
      image: "/matrixPort.png",
      description: "Matrix-themed portfolio site",
      tech: ["HTML5", "CSS3", "TailwindCSS", "Javascript", "React.js", "Frontend Development"],
      liveLink: "https://matrix-folio.vercel.app/",
      githubLink: "https://github.com/NandanKumar07/matrix",
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  )
}
