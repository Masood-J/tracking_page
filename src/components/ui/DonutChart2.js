import { PieChart, Pie, Cell,ResponsiveContainer } from 'recharts';


export default function DonutChart2(){
    const data = [
        { name: 'Online 0%', value: 10 },
        { name: 'Offline 100%', value: 90 }
    ];

    const COLORS = ['#ffffff','#e5e7eb'];
    const COLORS2=['#71e2a7','#e5e7eb' ]
    const positionx=[40,-60]
    const positiony=[0,-40]

    return(

        <div className={`flex flex-row justify-center items-center mt-10`}>
            <ResponsiveContainer width={`100%`} height={250} className={``}>

                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={`60%`}
                        outerRadius={`90%`}
                        dataKey="value"
                        labelLine={false} // hides default line
                        label={({ x, y, name, value, index }) => (
                            <text
                                x={x + positionx[index]}
                                y={y + positiony[index]}
                                fill={COLORS2[index]} // text color matches slice color
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize={12}
                                fontWeight="600"
                                className={`text-lg`}
                            >
                                {`${name}`}
                            </text>
                        )}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>

                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={30}
                        fontWeight="bold"
                    >
                        {51}
                    </text>
                </PieChart>
            </ResponsiveContainer>

        </div>
    )
}