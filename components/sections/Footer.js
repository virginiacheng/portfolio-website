import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ToolTip from '@components/ToolTip';

export default function Footer() {
  return (
    <div className="mt-16 border-t border-slate-400">
      <div className="pt-6">
        @ Virginia Cheng 2024
        <br></br>
        <ToolTip message="Open Github Link">
          <a
            className="hover:text-indigo-600 font-bold"
            href="https://github.com/virginiacheng/portfolio-website"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> Source Code
          </a>
        </ToolTip>
        Powered by Next.js, styled with Tailwind CSS and deployed on Netlify.
      </div>
    </div>
  );
}
