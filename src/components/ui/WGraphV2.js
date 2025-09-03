


export default function WGraphV2(){
    let week=["Fri","Sat","Sun","Mon","Tue","Wed","Thu"]


    return(
        <div className={`mt-17`}>
            <div className="flex flex-row justify-around gap-3 ml-3 mr-3 mt-11">

                {week.map((value,index)=>{return <div key={index} className={`rounded-t-full bg-[#5290f7] w-2 h-1`}>
                    <p className="text-gray-400 text-xs mt-1 self-start">{value}</p>
                </div>})}
            </div>

        </div>
    )


}