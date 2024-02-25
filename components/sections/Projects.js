import WorkItem from './WorkItem';
import data from 'data/projectData';

export default function Projects() {
  return (
    <>
      <span
        id="projects"
        aria-label="Projects"
        className="block h-48 invisible -mt-48"
      ></span>
      <section id="projects-content" className="mb-16" data-section>
        <h2 className="text-3xl font-bold text-indigo-800 mb-4 sticky top-0 bg-slate-300 py-3 z-10 lg:relative">
          Projects
        </h2>
        {data.map((item, i) => (
          <WorkItem
            key={i}
            name={item.name}
            description={item.description}
            time={item.time}
            link={item.link}
            github={item.github}
            tech={item.tech}
            img={item.img}
            tooltip={item.tooltip}
          />
        ))}
      </section>
    </>
  );
}
