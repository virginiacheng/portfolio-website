import WorkItem from "./WorkItem"
import data from 'data/experienceData'

export default function Experience() {
    return (
        <section id="experience" aria-label="Experience">
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-indigo-400 mb-8">
                    Experience
                </h2>
                {
                    data.map((item, i) => (
                        <WorkItem
                            key={i}
                            company={item.company}
                            role={item.role}
                            description={item.description}
                            time={item.time}
                            link={item.link}
                            tech={item.tech}
                            img={item.img}
                        />
                    ))
                }
            </div>
        </section>
    )
}