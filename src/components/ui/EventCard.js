import {LuTruck} from "react-icons/lu";
import DotProgress from "@/components/ui/DotProgress";
import DotProgressV2 from "@/components/ui/DotProgressV2";
import { FaRegUserCircle } from "react-icons/fa";
export default function ProgressBarContainer(){

    return(

        <div>

            <div className={`bg-[#eef2ff] p-3 border-2 rounded-xl border-[#c7d2fe]`}>
                <div className={`flex flex-row justify-between`}>
                    <div className={`flex flex-row gap-2 items-center`}>
                        <FaRegUserCircle color={`#797cf1`}></FaRegUserCircle>
                        <h2 className={`text-black font-semibold`}>FMB125</h2>
                    </div>
                    <h2 className={`bg-[#c7d2fe] text-[#534fc3] rounded-md p-1`}>0h 43m</h2>
                </div>
                <div className={`flex flex-row justify-between text-[#6d88a1] text-sm font-medium`}>
                    <div className={`flex flex-row gap-2 items-center`}>
                        <p>Started: 10:13 AM</p>
                    </div>
                    <p>Route: Unknown Route</p>
                </div>
                <DotProgressV2></DotProgressV2>
                <div className={`flex flex-row justify-between mt-2 text-sm text-[#6d88a1]`}>

                    <h3 className={`text-[#a3a7b8]`}>Start</h3>
                    <h4 className={`text-[#a3a7b8]`}>In Progress</h4>
                    <h4 className={`text-[#a3a7b8]`}>End</h4>
                </div>
            </div>
        </div>
    )
}