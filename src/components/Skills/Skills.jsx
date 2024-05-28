import SkillCard from './SkillCard/SkillCard';
import './Skills.css';
import { SKILLS } from "../../utils/data";
import { useState } from 'react';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';


const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };

return (
    <section id="skills" className='skills-container'>
        <h5>Technical Proficiency</h5>

        <div className='skills-content'>
            <div className='skills'></div>
                {SKILLS.map((item) => (
                    <SkillCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={() => {
                        handleSelectSkill(item);
                    }} />
                ))}
            <div className='skills-info'>
                <SkillsInfoCard
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}/>
            </div>
        </div>
    </section>
    )
}

export default Skills