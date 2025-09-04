import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';


export default function DonutChart(){
    const data = [
        { name: 'Red', value: 40 },
        { name: 'Green', value: 10 },
        { name: 'Purple', value: 30 },
        { name: 'Cyan', value: 5 },
        {name:'Orange',value: 10},
        {name:'Gray',value:2}

    ];

    const COLORS = ['#f44336', '#a3e635', '#673ab7', '#4ade80','#f97316','#b0bec5'];
    const dataType=[{
        name:'Stationary',Color:'#f44336',value:977
    },{
        name:'Stationary with ignition on',Color:'#f97316',value:111

    },{name:'Moving',Color:'#4ade80',value:19},
        {name:'Moving with ignition on',Color:'#a3e635',value:308},
        {name:'No actual state',Color:'#8b5cf6',value:850},
        {name:'No coordiantes',Color:'#d1d5db',value:87}
    ]

    return(

        <div className={`flex flex-row justify-between mt-10`}>
<ResponsiveContainer width={`100%`} height={200} className={``}>
            <PieChart>
                <Pie

                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={`60%`}
                    outerRadius={`90%`}
                    dataKey="value"
                    labelLine={false}
                    label={({ cx, cy }) => (
                        <text
                            x={cx}
                            y={cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={30}
                            fontWeight="bold"
                        >
                            {2352}
                        </text>
                    )}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
</ResponsiveContainer>
<div>

<div className={`flex flex-col gap-2`}>
    {dataType.map((value,index)=>{
        return(<div key={index} className={`flex flex-row justify-between items-center gap-10`}><div  className={`flex flex-row items-center gap-2`}>
            <div className={`h-3 w-3 shrink-0`} style={{backgroundColor:value.Color}}></div>
            <p className={`text-xs text-nowrap`}>{value.name}</p>
        </div>
            <div >
                <p className={`text-xs`}>{value.value}</p>
            </div>
        </div>)
    })}
</div>
</div>
        </div>
    )
}