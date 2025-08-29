

export default function ProfileCard(props) {
let stat=props.stat;
    return(
        <div className={`flex flex-col gap-1 items-center`}>
            <div className={`p-3 ${stat?"text-blue-500":"text-gray-400 border-[#e2e8f0]"} bg-[#eff6ff] border-2  rounded-full `}>
                {props.icon}
            </div>
            <h3 className={`${stat?"text-blue-500":"text-gray-400"} font-semibold`}>{props.title}</h3>
            <p className={`text-gray-400 text-sm font-bold text-center`}>{props.desc}</p>
        </div>
    )
}