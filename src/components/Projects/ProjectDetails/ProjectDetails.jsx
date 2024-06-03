import './ProjectDetails.css';

const ProjectDetails = ({ title, description, techStack }) => {
    return (
        <div className="project-details">
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectDetails;
