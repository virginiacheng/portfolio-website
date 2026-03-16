const selectedStyle = 'text-slate-800 text-2xl font-bold';

export default function NavHeader({ sectionId, label, selectedSection }) {
    console.lo
    return (
        <h3
            id={`${sectionId}-header`}
            className={`hover:text-2xl hover:font-bold ${
                selectedSection === `${sectionId}-content` ? selectedStyle : 'text-xl'
            }`}
        >
            <a href={`#${sectionId}`}>{label}</a>
      </h3>
    );
  }
  