import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const ProjectCard = ({ project }) => {
    return (
        <div className="flex flex-col border border-green-400/30 rounded-lg !p-4 bg-green-400/5 hover:bg-green-400/10 transition-all duration-300 transform hover:scale-[1.03] shadow-md">

            {/* Image */}
            <div className="w-full h-48 overflow-hidden rounded-md border border-green-400/20 mb-4">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-3 flex-grow">
                <div className="flex justify-between items-center">
                    <h3 className="text-green-300 font-bold text-lg glitch-text">{"> " + project.name}</h3>
                </div>

                <p className="text-green-400/90 text-sm">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-green-400/10 border border-green-400/30 rounded text-green-400 text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-3 mt-4">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <button className="matrix-btn matrix-btn-blue flex items-center gap-2 text-xs">
                            <FaExternalLinkAlt /> Live
                        </button>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <button className="matrix-btn matrix-btn-red flex items-center gap-2 text-xs">
                            <FaGithub /> Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default ProjectCard
