import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

export default function Nav() {
    return (
        <div>
            <h1 className="text-5xl font-bold text-sky-300">
            Virginia Cheng
            </h1>
            <h2 className="text-2xl mt-2 text-indigo-200">
            Full-Stack Software Engineer II @EverTrue
            </h2>

            <div className="mt-8 text-indigo-50">
                <h3 className="text-xl hover:text-indigo-400 hover:text-2xl hover:font-bold transition-all">
                    <a href="#about-me">
                        About Me
                    </a>
                </h3>
                <h3 className="text-xl mt-2 hover:text-indigo-400 hover:text-2xl hover:font-bold transition-all">
                    <a href="#experience">
                        Experience
                    </a>
                </h3>
                <h3 className="text-xl mt-2 hover:text-indigo-400 hover:text-2xl hover:font-bold transition-all">
                    <a href="#projects">
                        Projects
                    </a>
                </h3>
            </div>

            <div className="mt-8">
                <a href="https://www.linkedin.com/in/virginia-cheng/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="text-4xl m-2 hover:text-indigo-400" />
                </a>
                <a href="https://github.com/virginiacheng" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-4xl m-2 hover:text-indigo-400" />
                </a>
            </div>
      </div>
    )
  }