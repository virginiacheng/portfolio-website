export default function AboutMe() {
  return (
    <>
      <span
        id="about"
        aria-label="About Me"
        className="block h-48 invisible -mt-48"
      ></span>
      <section id="about-content" className="mb-16" data-section>
        <h2 className="text-3xl font-bold text-indigo-800 sticky top-0 bg-slate-300 py-3 z-10 lg:relative">
          About Me
        </h2>
        <div>
          I am a full-stack software engineer with 2 years of industry
          experience working in web applications. Currently, I specialize in
          CSS, HTML, Javascript with AngularJS (1.x), React and Vue.js for the
          front-end and PHP with Laravel framework and MySQL database for the
          back-end.
          <br></br>
          <br></br>
          One of my proudest accomplishments as a software engineer was building
          a website from scratch for Cafe Maddy Cab, an initiative that pays for
          cab rides for the vulnerable Asian minority population in New York
          City. Between May and November 2022, our small team of volunteers
          raised a total of $106,880 and provided 4,134 safe rides for the AAPI
          community. I strive to bring that kind of passion and success to all
          of my opportunities.
          <br></br>
          <br></br>
          In my spare time, I enjoy rock climbing, pottery, making cakes, and
          watching the NFL.
        </div>
      </section>
    </>
  );
}
