
export default function DashButton(props){


    return(
        <button className="md:pb-1 lg:h-10 pl-3 pr-3 text-black border-[#d1d5db] font-semibold rounded-xl border-1">
            {props.title}
        </button>
    )
}