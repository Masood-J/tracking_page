import {Line} from "rc-progress";

export default function ProgressLine(props){
    let PercentVal=props.percent;
    return(
        <div>
            <div className={`flex flex-row justify-between ${props.TextColor} mb-2`}>
                <h3 className={`text-black font-light`}>{props.name}</h3>
                <p className={`text-gray-400 text-sm font-bold`}>{PercentVal}{props.stat}</p>
            </div>
            <Line
                percent={props.percent}
                strokeWidth={1}
                strokeColor={`${props.Color}`}
                trailColor="#f1f5f9"
            />
        </div>
    )
}