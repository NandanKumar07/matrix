export default function Experience() {
  return (
    <section id="experience" className="py-20 flex justify-center items-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-green-400 text-sm">{"> EXPERIENCE_LOG.TXT"}</div>
          </div>

          <div className="terminal-content flex flex-col gap-5">
            <div className="mb-6">
              <span className="text-green-300">{"nandan@matrix:~$ "}</span>
              <span className="text-green-400">cat work_history.log</span>
            </div>

            {/* Timeline container with vertical line */}
            <div className="relative border-l-2 border-green-400/30 pl-12 space-y-14">

              {/* Experience Block */}
              <div className="relative">
                {/* Circle (dot) */}
                <div className="absolute -left-6 top-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>

                {/* Text content */}
                <div>
                  <div className="text-green-300 font-bold text-lg">{"> FULL STACK INTERN (REMOTE)"}</div>
                  <div className="text-green-400/80">
                    Carer Healthcare, Gurugram | Apr 2025 - June 2025
                  </div>
                  <div className="!mt-3 text-green-400/90">
                    <div>• Worked primarily on frontend using React.js, focusing on UI development and API integration</div>
                    <div>• Collaborated with backend developers to connect and test REST APIs for smooth functionality</div>
                    <div>• Used GitHub for version control while contributing to production-ready features in agile, remote team</div>
                  </div>
                </div>
              </div>

              {/* Certifications Block */}
              <div className="relative">
                {/* Circle (dot) */}
                <div className="absolute -left-6 top-1 w-4 h-4 bg-green-400/60 rounded-full"></div>

                {/* Text content */}
                <div className="!mt-10">
                  <div className="text-green-300 font-bold text-lg">{"> TRAINING & CERTIFICATIONS"}</div>
                  <div className="!mt-3 space-y-2 text-green-400/90 leading-relaxed">
                    <div>• Machine Learning Specialization by Andrew Ng on Coursera</div>
                    <div>• Exploratory Data Analysis & Data Visualization by Srikanth Verma on Scaler Topics</div>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-8 text-green-400/70">{"> END OF LOG FILE"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
