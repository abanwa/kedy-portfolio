import RevealOnScroll from "../RevealOnScroll";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl ml-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* first project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Kula_DAO</h3>
              <h5><strong>Role</strong>: Key Opinion Leader (KOL)</h5>
              <p className="text-gray-400 mb-4">
                As A KOL for Kula_DAO, I was responsible for amplifying their mission and updates across socila media, primarily on <span className="font-bold">X</span>. I help introduce the project to new audience by:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Creating informative threads explaining the utility of Kula_DAO.
                </li>
                <li>
                  Engaging with their community via posts, comments, and quotes tweets.
                </li>

                <li>
                  Sharing news, updates, and major announcements in an engaging way
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {/* {["React", "Node", "AWS", "Docker"].map((tech) => ( */}
                {[""].map((tech) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://x.com/big_kedy/status/1906993801110966685?s=46"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  Sample Post &rarr;
                </a>
              </div>
            </div>

            {/* second project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">ELFI Protocol</h3>
              <h5><strong>Role</strong>: Key Opinion Leader (KOL)</h5>
              <p className="text-gray-400 mb-4">
                For ELFI Protocol, I acted as a KOL by helping educate my followers on the project's innovative DeFi offerings. I contributed by:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Creating educational threads and posts about ELFI's use case and features.
                </li>
                <li>
                  Running polls and discussions to increase engagement.
                </li>

                <li>
                  Posting visual content to simplify complex concepts for a wider audience.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {[""].map((tech) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://x.com/big_kedy/status/1891790400811061625?s=46"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  Sample Post &rarr;
                </a>
              </div>
            </div>

            {/* Third project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">WOWEARN</h3>
              <h5><strong>Role</strong>: Ambassador</h5>
              <p className="text-gray-400 mb-4">
                As an ambassador for WOWEARN, my tasks involved both community building and content promotion. I:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Helped onboard new users to the platform.
                </li>
                <li>
                  Wrote content explaining the features and earning mechanisms of WOWEARN.
                </li>
                <li>
                  Actively participated in their campaigns and challenges.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {[""].map(
                  (tech) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                      key={tech}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://x.com/big_kedy/status/1902623287177261072?s=46"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  Sample Post &rarr;
                </a>
              </div>
            </div>

            {/* Fourth project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Knightrade</h3>
               <h5><strong>Role</strong>: Ambassador</h5>
              <p className="text-gray-400 mb-4">
                In my ambassador role at Knightrade, I supported the project by:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Promoting upcoming launches and events.
                </li>
                <li>
                  Creating content that highlighted key features like trading tools and tokenomics.
                </li>
                <li>
                  Providing user feedback and helping the community understand how to use the platform.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {[""].map((tech) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://x.com/big_kedy/status/1904926883533185466?s=46"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  Sample Post &rarr;
                </a>
              </div>
            </div>

            {/* Fifth project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Coin98 Super Wallet</h3>
               <h5><strong>Role</strong>: Ambassador</h5>
              <p className="text-gray-400 mb-4">
                In my role as a Coin98 ambassador, I focused on educating my audience about multi-chain wallet functionality, DeFi access, and the use of dApps within Coin98. I produced engaging posts and tutorials, emphasizing ease of use, security and versatility.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[""].map((tech) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://x.com/big_kedy/status/1867119744781889727?s=46"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  Proof of Work &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
