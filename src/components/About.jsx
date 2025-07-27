import React from 'react'

const About = () => {
  return (
    <section id="about" className="mx-20 py-20 px-4 flex justify-center items-center ">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-green-400 text-sm">{"> ABOUT_NANDAN.EXE"}</div>
          </div>

          <div className="terminal-content flex flex-col gap-10">
            <div>
              <div className="mb-6">
                <span className="text-green-300">nandan@matrix:~$ </span>
                <span className="text-green-400">whoami</span>
              </div>

              <div className="space-y-4 leading-relaxed text-green-400/95">
                <div>&gt; Full Stack Developer with expertise in React.js, Node.js, and modern web technologies</div>
                <div>&gt; Completed my B.Tech from the University Institute of Engineering and Technology, MDU Rohtak in 2025.</div>
                <div>&gt; Passionate about Machine Learning, Web Development, and Competitive Programming</div>
                <div>&gt; Experience as Full Stack Intern at Carer Healthcare, working on production-ready features</div>
                <div>&gt; Strong problem-solving skills with 700+ LeetCode problems solved</div>
              </div>
            </div>


            <div>
              <div className="space-y-8 leading-relaxed">
                <span className="text-green-300">nandan@matrix:~$ </span>
                <span className="text-green-400">cat education.txt</span>
              </div>

              <div className="space-y-6 leading-relaxed text-green-400/95">
                <div>&gt; Bachelor of Technology - 79.30% <br></br>University Institute of Engineering and Technology, MDU Rohtak (2025) </div>
                <div>&gt; Higher Secondary - 86.6% <br></br> Government Model Sr. Sec. School, Haryana (2019) </div>
                <div>&gt; Secondary / High School  - 86.6% <br></br> Bhartiya Vidya Kunj Sr. Sec. School, Palla, Haryana (2017)</div>
              </div>
            </div>


            <div className="mt-6 text-green-400 animate-pulse">&gt; _</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
