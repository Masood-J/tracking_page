
export default function FuelStat(props){


    return(

        <div className={`flex flex-col gap-3`}>
            <div className={`flex flex-row gap-2`}>
            <h3 className={`font-semibold text-sm`}>{props.f1}</h3>
                <p className={`text-black font-medium`}>{props.f1Val}</p>
            </div>
            <div className={`flex flex-row gap-2`}>
                <h3 className={`font-semibold text-sm`}>{props.f2}</h3>
                <p>{props.f2Val}</p>
            </div>
            <div className={`flex flex-row gap-2`}>
            <h3 className={`font-semibold text-sm`}>{props.f3}</h3>
                <p>{props.f3Val}</p>
            </div>
        </div>
    )
}