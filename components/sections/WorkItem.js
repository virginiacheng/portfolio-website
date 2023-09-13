import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 

export default function WorkItem({ name, company, role, description, time, link, github, tech, img }) {
    return (
        <div className="flex mb-8">
            <img className="w-1/5" src={img}></img>
            <div className="ml-6">
                <h3 className="text-2xl font-bold text-indigo-200">
                    <a className="hover:text-3xl hover:text-indigo-400 transition-all" href={link} target="_blank" rel="noopener noreferrer">
                        { name ? name : company }
                    </a>
                    {/* <FontAwesomeIcon className="ml-2 hidden" icon={faArrowUpRightFromSquare} /> */}
                </h3>
                {
                    role ? 
                        <h4 className="font-bold">
                            {role}
                        </h4>
                        :
                        <a className="text-xl font-bold hover:text-2xl hover:text-indigo-400 transition-all" href={github} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} /> Github Link
                            {/* <FontAwesomeIcon className="text-sm" icon={faArrowUpRightFromSquare} /> */}
                        </a>
                }
                <h5>
                    {time}
                </h5>
                <p className="mt-2">
                    {description}
                </p>
                <div className="flex flex-wrap mt-4">
                    {
                        tech.map((skill, i) => (
                            <div className="border border-indigo-400 rounded-full bg-indigo-600 text-indigo-200 w-max px-4 py-2 mt-2 mr-2">
                                {skill}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}