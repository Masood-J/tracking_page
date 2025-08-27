

export default function CircleBar(props){


    return(
        <div className={`flex flex-row justify-center`}>
        <div
            className={`w-28 h-28 rounded-full border-14 ${props.styles} flex items-center justify-center`}>
            <div className="flex flex-col items-center">
                {props.children}
            </div>

        </div>
        </div>
    )
}