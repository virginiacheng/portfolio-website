import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ExperienceItem({ company, role, description, time, link, tech, img }) {
    return (
        <div className="flex mb-8">
            <img className="w-1/5" src={img}></img>
            <div className="ml-6">

                <h3 className="text-2xl font-bold text-indigo-200">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        { company }
                    </a>
                    {/* <FontAwesomeIcon className="ml-2 hidden" icon={faArrowUpRightFromSquare} /> */}
                </h3>
                <h4 className="font-bold">
                    {role}
                </h4>
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