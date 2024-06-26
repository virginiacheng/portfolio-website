import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ToolTip from '@components/ToolTip';

export default function WorkItem({
  name,
  company,
  role,
  description,
  time,
  link,
  github,
  tech,
  img,
  tooltip,
}) {
  return (
    <div className="flex flex-col mb-8">
      <h3 className="text-2xl font-bold text-indigo-400">
        <ToolTip message={tooltip}>
          <a
            className="hover:text-indigo-600 transition-all"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name ? name : company}
          </a>
        </ToolTip>
      </h3>
      {role ? (
        <h4 className="font-bold">{role}</h4>
      ) : (
        <ToolTip message="Open Github Link">
          <a
            className="text-xl font-bold hover:text-indigo-600 transition-all"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> Github Link
          </a>
        </ToolTip>
      )}
      <h5>{time}</h5>
      <p className="mt-2">{description}</p>
      <div className="flex flex-wrap mt-4">
        {tech.map((skill, i) => (
          <div
            key={i}
            className="border-2 border-sky-800 rounded-full bg-sky-200 text-sky-800 w-max px-4 py-2 mt-2 mr-2"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
