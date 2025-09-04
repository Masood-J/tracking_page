
export default function DashButton1(props){


    return(
        <button className="sm:p-0 md:text-sm text-white h-10 pl-3 pr-3  bg-[#2563eb] font-semibold rounded-xl">
            {props.children}
        </button>
    )
}