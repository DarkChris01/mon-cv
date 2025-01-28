import { useEffect, useRef, useState } from "react"

export default function ProgressBar({ skill }) {

    const [level, setLevel] = useState(0);
    let progressBarAnimation;
    useEffect(() => {
        function animation() {
            if (level < skill.level) {
                setLevel(level + 1)
                progressBarAnimation = requestAnimationFrame(animation)
            }
        }
        animation();
        return () => cancelAnimationFrame(progressBarAnimation);
    }, [level])


    return (
        <>
            <progress className="border rounded-full overflow-hidden bg-gray-200 w-full h-5" value={level} max="100">{level}%</progress>
        </>)
}