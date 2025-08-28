
export default function WeekEventsV3(props){

    let weekStatus=props.status;
    return(

        <div className="flex flex-row justify-between ml-3">
            <div className={`mt-3`}>
                {props.children}
                <h1 className="text-black text-2xl font-bold">{props.unit}</h1>
                <p className="text-gray-400 whitespace-nowrap">{props.totalT}</p>
                <h3 className="text-black font-semibold mt-3">{props.trend}</h3>
                {props.info}

            </div>
            {weekStatus && (

                    <div className={`${props.StatusB} text-[#48505c] font-medium rounded-3xl h-8 pl-2 pr-2 pt-1 mt-4 flex flex-col`}>
                        <div className={`flex flex-row items-center gap-2 ${props.ValueColor}`}>
                        {props.icon}
                            <h3 className={`font-semibold text-end`}>{props.EventValue}</h3>
                        </div>
                        <h3 className={`font-medium`}>{props.EventType}</h3>

                    </div>
            )}

        </div>
    )
}