import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ExperienceItem({ company, role, description, time, link, tech, img }) {
    return (
        <div className="flex mb-8">
            <img className="w-1/5" src={img}></img>
            <div className="ml-6">

                <h2 className="text-2xl font-bold text-indigo-200">
                    <a className="hover:text-indigo-400 hover:text-3xl transition-all" href={link} target="_blank" rel="noopener noreferrer">
                        { company }
                    </a>
                    {/* <FontAwesomeIcon className="ml-2 hidden" icon={faArrowUpRightFromSquare} /> */}
                </h2>
                <h3 className="font-bold">
                    {role}
                </h3>
                <h4>
                    {time}
                </h4>
                <p className="mt-2">
                    {description}
                </p>
            </div>
        </div>
    )
}