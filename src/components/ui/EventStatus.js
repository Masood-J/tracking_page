
export default function EventStatus(props){

    return(
        <div className={`${props.MarginT} ml-3`}>
            <h2 className="text-black font-semibold ">Latest Event</h2>
            <div className="border-1 border-red-400 bg-[#fef2f2] mt-3 rounded-xl p-2 mr-3">
                <p className="text-center text-gray-400 font-normal">No Latest Event</p>
            </div>
        </div>
    )
}