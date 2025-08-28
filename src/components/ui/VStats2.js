
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { GoClock } from "react-icons/go";
export default function VStats2(props){
    let status_boolean=props.active;

    return(
        <div className="flex flex-row justify-between items-center mt-3 mr-2">
            <div>
                <div>
                    <p>{props.name}</p>
                    <div className={`flex flex-row items-center gap-1`}>
                        <p className="text-gray-400 text-sm font-bold nowrap">
                            {props.status}</p>
                    </div>
                </div>
            </div>
            <div>
            <div className={`${status_boolean ? 'bg-[#2563eb]':'bg-[#ef4444]'} rounded-3xl h-7 pr-2 pl-2 flex flex-col gap-2 items-center ${props.background} `}>
                <h4 className={`font-semibold ${props.StatColor}`}>
                    {props.stat}</h4>
            </div>
                <p className={`text-gray-400 font-medium whitespace-nowrap`}>{props.time}</p>
            </div>

        </div>
    )

}