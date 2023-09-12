import ExperienceItem from "./ExperienceItem"
import data from 'data/experienceData'

export default function Experience() {
    return (
        <div className="mt-16">
            {
                data.map((item) => (
                    <ExperienceItem
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