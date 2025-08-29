import {Users} from "lucide-react";

export default function FormCard(props) {

    return(
        <div className={`h-screen`}>
<div className={`flex flex-row gap-2 items-center rounded-xl border-2`}>
    {props.icon}
    <div className={`flex flex-col gap-2`}>
        <h2 className={`text-white font-bold`}>{props.title}</h2>
        <p className={`text-white font-medium`}>{props.desc}</p>
    </div>
</div>
            {props.children}
        </div>
    )
}