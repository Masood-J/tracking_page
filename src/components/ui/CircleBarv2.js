import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";

export default function CircleBarv2(props) {
    const value = 14;
    return (
        <div className={`flex flex-row justify-center`}>
            <div className="w-49 h-28">
                <CircularProgressbarWithChildren
                    value={value}
                    text={``}
                    circleRatio={`-0.5`}
                    styles={buildStyles({
                        rotation:0.25,
                        pathColor: "#eb4899",
                        textColor: "purple",
                        trailColor: "#e5e7eb", // gray-200
                        strokeLinecap: "round",

                    })}
                >
                    <div className={`flex flex-col items-center mb-12`}>
                        <h2 className={`text-[#7134b0] text-2xl font-bold`}>0</h2>
                        <p className={`text-gray-400 font-medium text-xs`}>mph</p>
                        <div className={`h-3 w-3 bg-[#6b21a8] rounded-full`}></div>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
}