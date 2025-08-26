
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { GoClock } from "react-icons/go";
export default function VStats(props){
let status_boolean=props.active;

    return(
        <div className="flex flex-row justify-between items-center mt-3 mr-2">
            <div>
                <div>
                    <p>{props.name}</p>
                    <div className={`flex flex-row items-center gap-1`}>
                    <GoClock color={`gray`}></GoClock>
                    <p className="text-gray-400 text-sm font-bold">
                        {props.time}</p>
                    </div>
                </div>
            </div>
            <div className={`${status_boolean ? 'bg-green-500':'bg-red-600'} rounded-3xl h-7 pr-2 pl-2 flex flex-row gap-2 items-center ${props.background} `}>
                {status_boolean && <IoIosCheckmarkCircleOutline color={`white`}></IoIosCheckmarkCircleOutline>
                }
                <h4 className={`text-white font-semibold`}>
                    {props.status}</h4>

            </div>
        </div>
    )

}