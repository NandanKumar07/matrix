import React, { useEffect, useRef } from 'react'

const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return ;

        const ctx = canvas.getContext('2d');
        if(!ctx) return ;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = "アカサタナハマヤラワC/C++NextJavascriptPythonPhpLaravelReactNodeTailwindCSSHTMLScikit-LearnNumpyPandasMatplotlibMongoDBMySQLGIT/GithubPostMan}".split("");
        const font_size = 10;
        const columns = canvas.width/font_size;
        const drops = [];

        for(let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function draw() {
            if(!ctx || !canvas) return ;

            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = font_size + "px monospace";

            for(let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random()* matrix.length)];
                ctx.fillText(text, i*font_size, drops[i]*font_size);

                if(drops[i] * font_size > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }
        const interval = setInterval(draw, 35);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        }
    }, []);
    
  return (
    <canvas ref={canvasRef} className='fixed top-0 left-0 w-full h-full z-0 opacity-30'/>
  )
}

export default MatrixRain
