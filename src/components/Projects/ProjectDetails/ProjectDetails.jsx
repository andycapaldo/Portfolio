import './ProjectDetails.css';

const ProjectDetails = ({ title, description, techStack, liveProject, gitHub }) => {
    return (
        <div className="project-details">
            <div className='details'>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className='tech-stack'>
                    {techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
            <div className='project-links'>
                <a href={liveProject}><h3>Live Project</h3></a>
                <a href={gitHub}><h3>GitHub</h3></a>
            </div>
        </div>
    );
};

export default ProjectDetails;
