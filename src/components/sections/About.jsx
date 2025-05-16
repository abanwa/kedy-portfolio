import RevealOnScroll from "../RevealOnScroll";

function About() {
  const expertises = [
    "Content Strategist",
    "Content Writing",
    "Video Content Creation"
  ];

  const skills = [
    "Financial analysis",
    "Strategic planning",
    "Leadership & teamwork",
    "Data-driven decision-making"
  ];

  
  // const frontendSkills = ["React", "NextJS", "TailwindCSS", "Bootstrap", "Git"];
  // const backendSkills = ["PHP", "NodeJS", "MySQL", "MongoDB", "RESTFUL API"]

  const socials = [{label:"Telegram", link:"http://t.me/BigKedy"}, {label:"X", link:"https://x.com/big_kedy"}];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Web3 enthusiast skilled in marketing and technical writing,I
              bridge products and tokens to the public with clarity and impact.
              My passion drives engagement, ensuring complex concepts resonate
              widely.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* For Frontend SKills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {expertises.map((expert) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                      key={expert}
                    >
                      {expert}
                    </span>
                  ))}
                </div>
              </div>

              {/* For BackEnd Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((tech) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* FOR EDUCATION */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📚 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Sc. in Business Management</strong>
                </li>
                <li>
                  Relevant Coursework: Accounting & Finance, Marketing,
                  Economics, Operations & Analytics...
                </li>

                <li>
                  <strong>Professional Content Writer</strong> - The Pw3acad
                  (Feb.2024 - Apr.2024)
                </li>
                <li>
                  <strong>Semi-pro Data Analyst</strong> - Skill Boost Limited
                  (Dec.2023 - Feb.2024)
                </li>
              </ul>
            </div>
                    {/* FOR WORK EXPERIENCE */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              {/* <h3 className="text-xl font-bold mb-3">👩‍💻💼 Work Experience</h3>*/}
              
              <div className="flex gap-1 items-center flex-wrap text-white mb-3">
                <h3 className="text-xl font-bold">👩‍💻💼 Work Experience</h3>
                  <a href="https://drive.google.com/file/d/18RLp3MsgHdjo1iD6qOC2Z-bPt68ZJ7p5/view?usp=drivesdk" target="_blank" className="bg-blue-500/30 text-blue-500 rounded-md cursor-pointer  py-1 px-3 text-sm">View Resume</a>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  {/* <p>Developed and maintained microservices for cloud-base application</p> */}
                  <h4 className="font-semibold">Brand Ambassador</h4>
                  <p>
                    <span className="inline-block h-1 w-1 bg-gray-300 rounded mr-1"></span>
                    wirexapp (2025 - Prsent)
                  </p>
                  <p>
                    <span className="inline-block h-1 w-1 bg-gray-300 rounded mr-1"></span>
                    Fusyfox (2024 - Prsent)
                  </p>
                  <p>
                    <span className="inline-block h-1 w-1 bg-gray-300 rounded mr-1"></span>
                    Roseon Exchange (2025 - Present)
                  </p>
                  <p>
                    <span className="inline-block h-1 w-1 bg-gray-300 rounded mr-1"></span>
                    Affi Netwrok (2024 - Prsent)
                  </p>
                  <p>
                    <span className="inline-block h-1 w-1 bg-gray-300 rounded mr-1"></span>
                    Axelar Network (2024 - Prsent)
                  </p>
                </div>
                <div>
                  {/* <p>Assisted in building front-end components and integrated RES APIs</p> */}
                  <h4 className="font-semibold">
                    Video Content Creator / Marketer
                  </h4>
                  <p>
                    <span className="inline-block h-1 w-1 bg-gray-300 rounded mr-1"></span>
                    Websserapp (2024 - Present)
                  </p>
                  <p>
                    <span className="inline-block h-1 w-1 bg-gray-300 rounded mr-1"></span>
                    Groundhogcoin (2023 - Prsent)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Marketing Manager</h4>
                  <p>
                    <span className="inline-block h-1 w-1 bg-gray-300 rounded mr-1"></span>
                    Theazaland project (2025)
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📷 Socials</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {socials.map((social) => (
                  <a href={social?.link}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all" target="_blank"
                    key={social?.label}
                  >
                    {social?.label}
                  </a>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
