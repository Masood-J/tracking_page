import {LuTruck} from "react-icons/lu";
import DotProgress from "@/components/ui/DotProgress";

export default function ProgressBarContainer(){

    return(

        <div>
            <h2 className={`text-black font-semibold`}>Most Critical Recent Event</h2>
            <div className={`bg-[#fff1f2] p-3 border-2 rounded-xl border-[#fed8dd]`}>
                <div className={`flex flex-row justify-between`}>
                    <div className={`flex flex-row gap-2 items-center`}>
                        <LuTruck color={`gray`}>
                        </LuTruck>
                        <h4>N/A</h4>
                    </div>
                    <h4>N/A</h4>
                </div>
                <DotProgress></DotProgress>
                <div className={`flex flex-row justify-between mt-6 text-sm`}>

                    <h3 className={`text-[#a3a7b8]`}>0%</h3>
                    <h4 className={`text-[#c9406c]`}>Critical (20%)</h4>
                    <h4 className={`text-[#a3a7b8]`}>100%</h4>
                </div>
                <div className={`flex flex-row gap-2 mt-1`}>
                    <h2 className={`font-semibold`}>Duration:</h2>
                    <p>0m</p>
                </div>
            </div>
        </div>
    )
}