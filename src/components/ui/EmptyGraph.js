



export default function EmptyGraph(props){
    let week=["Fri","Sat","Sun","Mon","Tue","Wed","Thu"]
    let WeekS=["M","T","W","T","F","S","S"];

    let UseCase=props.Case;
    const days = UseCase ? week : WeekS;
    return(
        <div>
            <div className="flex flex-row justify-center gap-9 ml-3 mr-3 mt-11">

                {days.map((value,index)=>{return <div key={index} className={`rounded-t-full`}>
                    <p className="text-[#8f8c9f] font-semibold text-xs mt-1 self-start">{value}</p>
                </div>})}
            </div>

        </div>
    )


}