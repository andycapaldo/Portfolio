import './Hero.css';
import reactLogo from '../../assets/react_logo.png';
import htmlLogo from '../../assets/html_logo.png';
import cssLogo from '../../assets/css_logo.png';
import javaScriptLogo from '../../assets/javascript_logo.png';
import pythonLogo from '../../assets/python_logo.png';
import heroImage from '../../assets/hero.png';


const Hero = () => {
return (
        <section className='hero-container'>
            <div className='hero-content'>
                <h2>Building Digital Experiences That Inspire</h2>
                <p>
                    Passionate Full-Stack Developer | Transforming Ideas into Seamless and 
                    Visually Stunning Web Solutions
                </p>
            </div>

            <div className='hero-img'>
                <div>
                    <div className='tech-icon'>
                        <img src={reactLogo} alt='reactLogo' />
                    </div>
                    <img src={heroImage} alt='placeholderImg' />
                </div>
                <div>
                    <div className='tech-icon'>
                        <img src={htmlLogo} alt='htmlLogo' />
                    </div>
                    <div className='tech-icon'>
                        <img src={cssLogo} alt='cssLogo' />
                    </div>
                    <div className='tech-icon'>
                        <img src={javaScriptLogo} alt='javaScriptLogo' />
                    </div>
                    <div className='tech-icon'>
                        <img src={pythonLogo} alt='pythonLogo' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero