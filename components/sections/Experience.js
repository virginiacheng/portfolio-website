import ExperienceItem from "./ExperienceItem"
import data from 'data/experienceData'

export default function Experience() {
    return (
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-indigo-200 hover:text-indigo-400 hover:text-4xl transition-all mb-8">
                Experience
            </h2>
            {
                data.map((item, i) => (
                    <ExperienceItem
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
    )
}