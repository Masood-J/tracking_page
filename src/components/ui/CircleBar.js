

export default function CircleBar(props){


    return(

        <div
            className="w-28 h-28 rounded-full border-14 border-gray-300 flex items-center justify-center">
            {props.children}
        </div>
    )
}