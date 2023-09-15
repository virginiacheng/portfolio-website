import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 

export default function Footer() {
    return (
        <div className="mt-16 w-3/5">
            <p>
                @ Virginia Cheng 2023
                <br></br>
                Powered by Next.js, styled with Tailwind CSS and deployed on Netlify.
            </p>
            <a className="hover:text-indigo-400" href="https://github.com/virginiacheng/portfolio-website" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} /> Source Code
            </a>
        </div>
    )
}