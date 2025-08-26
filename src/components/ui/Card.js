import FleetCard from "@/components/ui/FleetCard";
import {PiRoadHorizonFill} from "react-icons/pi";
import {LuTruck, LuWrench} from "react-icons/lu";


export default function Card(props){


    return(
        <div className={`flex-1 text-black border-2 border-[#e2e8f0] rounded-2xl min-h-[150px] ${props.mt} ${props.h} ${props.flexSize}  ${props.SetOverflow}`}>
            <div className={`p-5  ${props.CustomP}  `}
                 style={{ padding: props.CustomP === 'p-0' ? '0' : undefined }}>
                <div className={`flex flex-row justify-between ${props.borderType}  ${props.gradient} ${props.marginB}`}>
                    <div className={``}>
                <h3 className={`font-semibold ${props.margin}`}>{props.title}</h3>
                <p className="text-[#6e7d8b] font-medium">{props.desc}</p>
                    </div>
                    {props.icon}
                </div>
                {props.children}
            </div>
        </div>
    )
}