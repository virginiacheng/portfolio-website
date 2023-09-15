import WorkItem from './WorkItem'
import data from 'data/projectData'

export default function Projects() {
    return (
        <section id="projects" aria-label="Projects">
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-indigo-400 mb-8">
                    Projects
                </h2>
                {
                    data.map((item, i) => (
                        <WorkItem
                            key={i}
                            name={item.name}
                            description={item.description}
                            time={item.time}
                            link={item.link}
                            github={item.github}
                            tech={item.tech}
                            img={item.img}
                        />
                    ))
                }
            </div>
        </section>
    )
}