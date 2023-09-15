export default function Nav() {
    return (
        <div>
            <h1 className="text-5xl font-bold text-sky-300">
            Virginia Cheng
            </h1>
            <h2 className="text-2xl mt-2 text-indigo-200">
            Full-Stack Software Engineer II @EverTrue
            </h2>

            <div className="mt-8 text-indigo-50">
                <h3 className="text-xl hover:text-indigo-400 hover:text-2xl hover:font-bold transition-all">
                    <a href="#about-me">
                        About Me
                    </a>
                </h3>
                <h3 className="text-xl mt-2 hover:text-indigo-400 hover:text-2xl hover:font-bold transition-all">
                    <a href="#experience">
                        Experience
                    </a>
                </h3>
                <h3 className="text-xl mt-2 hover:text-indigo-400 hover:text-2xl hover:font-bold transition-all">
                    <a href="#projects">
                        Projects
                    </a>
                </h3>
            </div>
      </div>
    )
  }