
import './About.css'
import react_img from '../../assets/DSC_6801.jpg'

export default function About(){
    return(
        <div className="About_container" id='About'>
            <div className="About_left">
                <p className="about_left_title specify">Hello</p>
                <div className="about_left_desc">
                    <p> I am <span className='specify'>Prashant Swami</span>
                    </p>
                    <div className="about_left_description">Student at <span className="specify">Lovely Professional University</span>
                    <br />
                    A passionate and driven second-year B.Tech student. With a keen interest in front-end development. My journey in web development has expanded to include full-stack development, allowing me to build comprehensive and dynamic web applications. I am enthusiastic about learning new technologies and applying my knowledge to real-world projects. As I continue my studies, I am eager to contribute to innovative projects and collaborate with like-minded individuals in the tech community.
                    </div>
              </div>
            </div>
            <div className="About_right">
                <img src={react_img} alt="" />
            </div>
        </div>
)
}