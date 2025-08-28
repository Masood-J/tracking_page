import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

export default function Chart(props){
    const data =props.data;
    return(
        <div className={`flex flex-col justify-center items-center`}>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right:0, bottom: 5, left: 0 }}>
                <CartesianGrid stroke="#aaa" strokeDasharray="5 5" vertical={false} />
                <Line type="monotone" dataKey="mileage" stroke="transparent" strokeWidth={2} name="My data series name" />
                <XAxis dataKey="date" tick={{ fontSize: 13 }}/>
                <YAxis width="auto" tick={{ fontSize: 13 }} label={{ value: '', position: 'insideLeft', angle: -90 }} />
                <Legend align="right" />
            </LineChart>
            <h2 className={`text-[#6e7d8b] font-medium`}>{props.dataType}</h2>
        </div>
    )


}