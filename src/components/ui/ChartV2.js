import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend,ResponsiveContainer } from 'recharts';

export default function ChartV2(props){
    const data =props.data;
    return(
        <div className="flex flex-col justify-center items-center w-full">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
                    <CartesianGrid stroke="#aaa" strokeDasharray="5 5" vertical={false} />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="transparent"
                        strokeWidth={2}
                        name="My data series name"
                    />
                    <XAxis dataKey="value" tick={{ fontSize: 13 }} interval={0} />
                    <YAxis hide domain={['auto', 'auto']} ticks={[0]} />
                    <Legend align="right" />
                </LineChart>
            </ResponsiveContainer>
            <h2 className="text-[#6e7d8b] font-medium">{props.dataType}</h2>
        </div>
    )


}