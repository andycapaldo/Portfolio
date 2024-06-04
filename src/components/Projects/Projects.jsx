import { PROJECTS } from '../../utils/data';
import './Projects.css';
import ProjectCarousel from './ProjectCarousel/ProjectCarousel';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import useSliderRefs from '../../hooks/useSliderRefs';

const Projects = () => {
    const sliderRefs = useSliderRefs(PROJECTS.length);

    return (
        <section id="projects" className="projects-container">
            <h5>Projects</h5>
            <div className='projects-content'>
                {PROJECTS.map((project, index) => (
                    <div key={project.title} className="project">
                        <div className='project-inner'>
                            <ProjectCarousel images={project.images} sliderRef={sliderRefs[index]} />
                            <ProjectDetails
                                title={project.title}
                                description={project.description}
                                techStack={project.techStack}
                                liveProject={project.liveProject}
                                gitHub={project.gitHub}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
