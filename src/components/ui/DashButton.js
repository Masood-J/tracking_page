
export default function DashButton(props){


    return(
        <button className="sm:pb-0 md:pb-1 lg:h-10 pl-3 pr-3 text-black border-[#d1d5db] font-semibold rounded-xl border-1">
            <h3 className={`sm:text-xs  md:text-base`}>{props.title}</h3>
        </button>
    )
}