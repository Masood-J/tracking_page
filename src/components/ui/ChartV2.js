import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

export default function ChartV2(props){
    const data =props.data;
    return(
        <div className={`flex flex-col justify-center items-center`}>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right:20, bottom: 5, left: 20 }}>
                <CartesianGrid stroke="#aaa" strokeDasharray="5 5" vertical={false} />
                <Line type="monotone" dataKey="value" stroke="transparent" strokeWidth={2} name="My data series name" />
                <XAxis dataKey="value"  tick={{ fontSize: 13 }}  interval={0}/>
                {/* Y Axis is hidden but required to keep domain stable */}
                <YAxis hide domain={['auto', 'auto']} ticks={[0]} />     <Legend align="right" />
            </LineChart>
            <h2 className={`text-[#6e7d8b] font-medium`}>{props.dataType}</h2>
        </div>
    )


}