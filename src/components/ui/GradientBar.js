

export default function GradientBar(props){

    return(
        <div className={`flex flex-row justify-between border-t-2xl  ${props.gradient}`}>
            <div className={``}>
                <h3 className={`font-semibold mt-3`}>{props.title}</h3>
                <p className="text-[#6e7d8b] font-medium">{props.desc}</p>
            </div>
            {props.icon}
        </div>
    )
}