import WorkItem from './WorkItem';
import data from 'data/experienceData';

export default function Experience() {
  return (
    <>
      <span
        id="experience"
        aria-label="Experience"
        className="block h-48 invisible -mt-48"
      ></span>
      <section id="experience-content" className="mb-16" data-section>
        <h2 className="text-3xl font-bold text-indigo-800 sticky top-0 bg-slate-300 py-3 z-10 lg:relative">
          Experience
        </h2>
        {data.map((item, i) => (
          <WorkItem
            key={i}
            company={item.company}
            role={item.role}
            description={item.description}
            time={item.time}
            link={item.link}
            tech={item.tech}
            tooltip={item.tooltip}
          />
        ))}
      </section>
    </>
  );
}
