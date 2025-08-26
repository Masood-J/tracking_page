

export default function CircleBar(props){


    return(

        <div
            className="w-28 h-28 rounded-full border-14 border-[#f1f5f9] flex items-center justify-center">
            {props.children}
        </div>
    )
}