import { useEffect, useState } from "react"

export default function ProgressBar({ skill }) {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        let progressBarAnimation;

        function animation() {

            setProgress(prev => {
                if (prev < skill.level+1) {
                    progressBarAnimation = requestAnimationFrame(animation)
                    return Math.min(prev + 6, skill.level+1); // Augmente en limitant à `skill.level`
                }
                cancelAnimationFrame(progressBarAnimation);
                return prev
            })
        }
        animation();

        return () => cancelAnimationFrame(progressBarAnimation);
    }, [skill])


    return (
        <>
        {/* <div className="w-full bg-gray-200 rounded-full overflow-hidden h-6">
            <div
                className="h-full bg-blue-500 transition-all duration-75"
                style={{ width: `${progress}%` }}
            />
        </div> */}
            <progress className="border rounded-full overflow-hidden bg-gray-200 w-full h-5" value={progress} max="100">{progress}%</progress>
        </>)
}