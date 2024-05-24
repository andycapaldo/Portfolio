import SkillCard from './SkillCard/SkillCard';
import './Skills.css';
import { SKILLS } from "../../utils/data";


const Skills = () => {
return (
    <section className='skills-container'>
        <h5>Technical Proficiency</h5>

        <div className='skills-content'>
            <div className='skills'></div>
                {SKILLS.map((item) => (
                    <SkillCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title} />
                ))}
            <div className='skills-info'></div>
        </div>
    </section>
    )
}

export default Skills