
export default function DashButton(props){


    return(
        <button className="h-10 pl-3 pr-3 text-black border-[#d1d5db] font-semibold rounded-md border-2">
            {props.title}
        </button>
    )
}