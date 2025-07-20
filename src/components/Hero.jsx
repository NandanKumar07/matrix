import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [text, setText] = useState("")
    const [showCursor, setShowCursor] = useState(true)
    const fullText = "WELCOME TO THE MATRIX..."

    useEffect(() => {
        let i = 0
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1))
                i++
            } else {
                clearInterval(timer)
            }
        }, 100)

        const cursorTimer = setInterval(() => {
            setShowCursor((prev) => !prev)
        }, 500)

        return () => {
            clearInterval(timer)
            clearInterval(cursorTimer)
        }
    }, [])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="flex flex-col gap-10 text-center z-10 max-w-4xl mx-auto px-4">
                <div className="mb-8 flex flex-col gap-5">
                    <div className="text-green-400 text-sm mb-4 opacity-70">{"> ACCESSING MAINFRAME..."}</div>
                    <div className="text-green-400 text-sm mb-4 opacity-70">{"> IDENTITY CONFIRMED..."}</div>
                    <div className="text-green-400 text-sm mb-8 opacity-70">{"> LOADING PROFILE..."}</div>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 glitch-text">NANDAN KUMAR</h1>

                <div className="text-xl md:text-2xl mb-8 text-green-300">
                    {text}
                    {showCursor && <span className="animate-pulse">|</span>}
                </div>

                <div className="text-lg md:text-xl mb-12 text-green-400/80">
                    <div className="mb-2">{"> FULL STACK DEVELOPER"}</div>
                    <div className="mb-2">{"> MACHINE LEARNING ENTHUSIAST"}</div>
                    <div>{"> COMPETITIVE PROGRAMMER"}</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="matrix-btn matrix-btn-red">
                        <span>{"> ENTER THE MATRIX"}</span>
                    </button>
                    <button className="matrix-btn matrix-btn-blue">
                        <span>{"> VIEW PROJECTS"}</span>
                    </button>
                </div>

                <div className="mt-16 text-green-400/60 text-sm animate-bounce">{"> SCROLL TO CONTINUE"}</div>
            </div>
        </section>
    )
}

export default Hero
