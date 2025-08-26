

export default function NavLink(props){


    return(
        <div className="flex flex-row gap-3 items-center bg-white text-black rounded-md w-50 p-1.5 hover:bg-gray-200">
            <div className={`shrink-0`}>{props.icon}</div>
            <p className="font-semibold">{props.title}</p>
            {props.children}

        </div>
    )
}