import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {TrendingDown} from "lucide-react";
import {
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";

export default function CirclularBar(props) {
    const value = 0;
    return (
        <div className={`flex flex-row justify-center`}>
            <div className="w-34 h-28 mt-5 mb-2">
                <CircularProgressbarWithChildren
                    value={value}
                    text={``}
                    circleRatio={`1`}
                    styles={buildStyles({
                        rotation:0.25,
                        pathColor: "#eb4899",
                        textColor: "purple",
                        trailColor: "#e5e7eb", // gray-200
                        strokeLinecap: "round",

                    })}
                >
                    <div className={`flex flex-col items-center `}>
                        <h2 className={`text-[#eab308] text-4xl font-bold`}>78</h2>
                        <div className={`flex flex-row items-center gap-1`}>
                            <TrendingDown className={`h-4 w-4 text-[#f15e5e]`}></TrendingDown>
                        <p className={`text-gray-400 font-semibold text-s`}>4 pts</p>
                    </div>

                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
}