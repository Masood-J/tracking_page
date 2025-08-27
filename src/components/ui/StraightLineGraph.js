


export default function StraightLineGraph(props){
    let week=["Fri","Sat","Sun","Mon","Tue","Wed","Thu"]


    return(
        <div>
            <div className={`flex flex-row ml-3 mr-3 mt-11`}>

                {week.map((value,index)=>{return <div key={index} className={`bg-orange-400 w-12 h-0.5`}>
                    <p className="text-gray-400 text-xs mt-1">{value}</p>
                </div>})}
            </div>
            <div className="mt-10 ml-3">
                <h2 className="text-black font-semibold ">Latest Event</h2>
                <div className="border-1 border-red-400 bg-[#fef2f2] mt-3 rounded-xl p-2 mr-3">
                    <p className="text-center text-gray-400 font-normal">No Latest Event</p>
                </div>
            </div>
        </div>
    )


}