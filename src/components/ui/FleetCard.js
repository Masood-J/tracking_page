

export default function FleetCard(props){


    return(
        <div className="Distance flex-1 self-center rounded-lg border-2 border-[#e2e8f0] h-19">
            <div className="flex flex-row items-center justify-center gap-2 mt-2">
                {props.icon}
                <h4>{props.title}</h4>
            </div>
            <h2 className="text-center text-black font-bold text-2xl">{props.value}</h2></div>
    )

}


