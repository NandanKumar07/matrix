import { useState, useEffect, useRef } from "react"

const Shell = () => {
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [showMatrixRain, setShowMatrixRain] = useState(false)

  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  const prompt = "nandan@matrix:~$ "

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      const trimmed = input.trim()
      const newCommand = { prompt, command: trimmed, isError: false }

      const validCommands = [
        "ls",
        "clear",
        "matrix",
        "show matrix-rain",
        "hide matrix-rain",
      ]

      if (trimmed === "clear") {
        setCommandHistory([])
      } else if (trimmed === "show matrix-rain") {
        setShowMatrixRain(true)
        setCommandHistory([...commandHistory, newCommand])
      } else if (trimmed === "hide matrix-rain") {
        setShowMatrixRain(false)
        setCommandHistory([...commandHistory, newCommand])
      } else if (
        trimmed.startsWith("cout ") ||
        validCommands.includes(trimmed)
      ) {
        setCommandHistory([...commandHistory, newCommand])
      } else {
        newCommand.isError = true
        setCommandHistory([...commandHistory, newCommand])
      }

      setInput("")
      setHistoryIndex(-1)

      setTimeout(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
      }, 0)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex].command)
      }
    }

    if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex].command)
      } else {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    focusInput()
  }, [])

  return (
    <div className={`flex justify-center items-center !mt-25 !mb-7 w-full text-green-400 font-mono overflow-hidden`}>
      <div
        className={`z-10 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 ${showMatrixRain ? 'backdrop-blur-none' : 'backdrop-blur-xs'} mx-auto h-screen md:h-[80vh] mt-0 md:mt-[10vh] bg-opacity-100 border border-green-500/30 rounded-none md:rounded-md shadow-2xl shadow-green-500/20 flex flex-col`}
      >
        <div className="flex flex-row bg-[#111827] gap-3 border-b border-green-500/30 items-center">
          <div className="flex flex-row gap-1 space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-green-400 text-sm font-semibold">MATRIX-CLI</div>
        </div>

        <div
          ref={terminalRef}
          className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-900"
          onClick={focusInput}
        >
          <div className="mb-4">
            <p className="text-green-300">Welcome to the Matrix Terminal (v1.0.0)</p>
            <p className="text-green-400/70 mt-1">Type 'ls' for available commands</p>
          </div>

          {commandHistory.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="flex">
                <span className="text-green-300">{item.prompt}</span>
                <span className="text-green-400 ml-1">{item.command}</span>
              </div>

              {/* Handle known commands */}
              {item.command === "ls" && (
                <div className="pl-4 mt-1 text-green-400/80">
                  <p>Available commands:</p>
                  <p className="pl-2">- ls: Display available commands</p>
                  <p className="pl-2">- clear: Clear the terminal</p>
                  <p className="pl-2">- cout [text]: Display text</p>
                  <p className="pl-2">- matrix: Enter the Matrix</p>
                  <p className="pl-2">- show matrix-rain: Show background Matrix Rain</p>
                  <p className="pl-2">- hide matrix-rain: Hide background Matrix Rain</p>
                </div>
              )}

              {item.command === "matrix" && (
                <div className="pl-4 mt-1 text-green-400/80 animate-pulse">
                  <p>Entering the Matrix...</p>
                  <p className="text-white">Follow the white rabbit.</p>
                </div>
              )}

              {item.command.startsWith("cout ") && (
                <div className="pl-4 mt-1 text-green-400/80">
                  {item.command.substring(5)}
                </div>
              )}

              {/* Unknown command handler */}
              {item.isError && (
                <div className="pl-4 mt-1 text-red-500">
                  Command not found: <span className="font-mono">{item.command}</span>
                </div>
              )}
            </div>
          ))}

          <form onSubmit={handleSubmit} className="flex">
            <span className="text-green-300">{prompt}</span>
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="w-full terminal-input !border-none bg-transparent text-green-400 !outline-none !pl-1"
                autoComplete="off"
                spellCheck="false"
              />
              {input === "" && cursorVisible && <span className="absolute left-1 top-0 text-green-400">▋</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Shell
