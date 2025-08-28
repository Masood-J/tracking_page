
export default function WeekEventsV2(props){

    let weekStatus=props.status;
    return(

        <div className="flex flex-row justify-between ml-3">
            <div className={`mt-3`}>
                <h1 className="text-black text-2xl font-bold">0{props.unit}</h1>
                <p className="text-gray-400 whitespace-nowrap">{props.totalT}</p>
                <h3 className="text-black font-semibold mt-3">{props.trend}</h3>
                {props.info}

            </div>
            {weekStatus && (
                <div>
                    <div className={`${props.StatusB} text-[#48505c] font-medium rounded-3xl mt-4 ml-12 flex flex-row items-center`}>
                        <h3 className={`font-semibold`}>{props.EventType}</h3>
                        {props.icon}
                        {props.perc}
                    </div></div>
            )}

        </div>
    )
}