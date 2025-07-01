const Achievements = () => {
  const achievements = [
    {
      platform: "LeetCode",
      stat: "700+ Problems Solved",
      rating: "Rating: 1636",
      icon: "🏆",
    },
    {
      platform: "Codeforces",
      stat: "150+ Problems Solved",
      rating: "Rating: 1096",
      icon: "⚡",
    },
    {
      platform: "ICPC",
      stat: "Competed in ICPC Online",
      rating: "Year: 2024",
      icon: "🎯",
    },
  ]

  return (
    <section id="achievements" className="px-4 h-full flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-green-400 text-sm">{"> ACHIEVEMENTS.JSON"}</div>
          </div>

          <div className="terminal-content p-8">
            <div className="mb-8">
              <span className="text-green-300">{"nandan@matrix:~$ "}</span>
              <span className="text-green-400">python parse_achievements.py</span>
            </div>

            <div className="space-y-8">
              <div className="text-green-400/80 mb-12 text-lg">
                {"> PARSING COMPETITIVE PROGRAMMING ACHIEVEMENTS..."}
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="border border-green-400/30 rounded-lg bg-green-400/5 hover:bg-green-400/10 transition-all duration-300 hover:scale-105 p-8 min-h-[170px] flex items-center justify-center"
                  >
                    <div className="text-center space-y-4">
                      <div className="text-5xl mb-4">{achievement.icon}</div>
                      <h3 className="text-green-300 font-bold text-xl">{achievement.platform}</h3>
                      <div className="text-green-400 text-lg">{achievement.stat}</div>
                      <div className="text-green-400/70">{achievement.rating}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6 text-green-400/80 mb-12">
                <div className="text-lg font-semibold mb-6">{"> COMPETITIVE PROGRAMMING STATISTICS:"}</div>
                <div className="space-y-3 ml-4">
                  <div>{"  • Total Problems Solved: 850+"}</div>
                  <div>{"  • Active on Multiple Platforms"}</div>
                  <div>{"  • Consistent Problem Solving Practice"}</div>
                  <div>{"  • Participated in International Competitions"}</div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-green-400/20 text-green-400/70 text-center">
              {"> PARSING COMPLETE. ALL ACHIEVEMENTS VERIFIED."}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
