
export default function SpeedCalc(){

    return(

        <div className={`flex flex-row justify-center gap-2`}>
            <div className={`flex flex-col items-center bg-[#faf5ff] w-29 rounded-xl`}>
<p>Max</p>
                <h2 className={`text-[#8832cf] font-bold`}>0 mph</h2>
            </div>
            <div className={`flex flex-col items-center bg-[#faf5ff] w-29 rounded-xl`}>
                <p>Avg</p>
                <h2 className={`text-[#8832cf] font-bold`}>0.00 mph</h2>
            </div>
            <div className={`flex flex-col items-center bg-[#faf5ff] w-29 rounded-xl`}>
                <p>Limit</p>
                <h2 className={`text-[#8832cf] font-bold`}>50 mph</h2>
            </div>
        </div>

    )
}