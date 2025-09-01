import {Users} from "lucide-react";

export default function FormCard(props) {

    return(
        <div className={``}>
<div className={` rounded-t-xl border-2 bg-gradient-to-r from-[#3c7ef5] to-[#4958ea] p-4`}>
    <div className={`flex flex-row gap-2 items-center ml-3`}>
    {props.icon}
    <div className={`flex flex-col gap-2`}>
        <h2 className={`text-white font-bold`}>{props.title}</h2>
        <p className={`text-white font-medium`}>{props.desc}</p>
    </div>
</div>
</div>
            {props.children}
        </div>
    )
}