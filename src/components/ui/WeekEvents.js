
export default function WeekEvents(props){

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
                    <p className={`${props.StatusB} text-green-900 font-medium rounded-3xl p-0.5 mt-4 mr-3 flex flex-row gap-2 items-center`}>

                        {props.icon}
                        {props.perc}% from last week
                    </p></div>
            )}

        </div>
    )
}