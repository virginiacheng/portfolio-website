import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import ToolTip from '@components/ToolTip';
import NavHeader from '@components/nav-components/NavHeader';
import navHeaderSections from 'data/navData';

export default function Nav() {
  const [selectedSection, setSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    let options = {
      rootMargin: '-300px',
      threshold: 0,
    };

    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;

      if (visibleSection) {
        setSection(visibleSection.id);
      }
    }, options);

    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="mr-6">
      <h1 className="text-5xl font-bold text-sky-800">Virginia Cheng</h1>
      <h2 className="text-2xl mt-2 text-sky-600">
        Software Engineer @DoorDash
      </h2>

      {/* TODO: see if it's better to move the mapping into component level */}
      <div className="mt-8 hidden lg:block">
        {navHeaderSections.map((section, i) => (
          <NavHeader
            key={i}
            sectionId={section.id}
            label={section.label}
            selectedSection={selectedSection}
          />
        ))}
      </div>

      {/* TODO: break this up into reusable component  */}
      <div className="mt-8 flex">
        <ToolTip message="Linkedin Profile">
          <a
            href="https://www.linkedin.com/in/virginia-cheng/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-4xl m-2 hover:text-slate-500"
            />
          </a>
        </ToolTip>
        <ToolTip message="Github Profile">
          <a
            href="https://github.com/virginiacheng"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl m-2 hover:text-slate-500"
            />
          </a>
        </ToolTip>
        <ToolTip message="Resume">
          <a
            href="/Virginia_Cheng_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFileLines}
              className="text-4xl m-2 hover:text-slate-500"
            />
          </a>
        </ToolTip>
      </div>
    </div>
  );
}
