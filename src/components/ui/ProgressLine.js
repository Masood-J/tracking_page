import {Line} from "rc-progress";

export default function ProgressLine(props){
let PercentVal=props.percent;
    return(
        <div>
            <div className={`flex flex-row justify-between ${props.TextColor} mb-2`}>
        <h3>{props.name}</h3>
            <p>{PercentVal}</p>
        </div>
        <Line
            percent={props.percent}
            strokeWidth={2}
            strokeColor={`${props.Color}`}
            trailColor="#f1f5f9"
        />
        </div>
    )
}