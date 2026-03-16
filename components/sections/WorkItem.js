import ToolTip from '@components/ToolTip';

export default function WorkItem({
  name,
  company,
  role,
  description,
  time,
  link,
  tech,
  tooltip,
}) {
  return (
    <div className="flex flex-col mb-8">
      <h3>
        <ToolTip message={tooltip}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name ? name : company}
          </a>
        </ToolTip>
      </h3>
      { role && 
        (
          <h4 className="font-bold">{role + ' | ' + time}</h4>
        )
      }
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
