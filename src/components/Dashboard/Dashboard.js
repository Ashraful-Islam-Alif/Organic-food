import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('rechartData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (


        <div className='chart-container'>
            <LineChart width={500} height={400} data={data}>
                <Line
                    type="monotone"
                    dataKey="sell"

                ></Line>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
            </LineChart>
            <AreaChart width={500} height={400} data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />

                <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" stackId="1" />
                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" stackId="1" />
            </AreaChart>

            <BarChart width={500} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" stackId="1" />
                <Bar dataKey="revenue" fill="#82ca9d" stackId="1" />
            </BarChart>

            <PieChart width={500} height={400}>
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        </div>

    );
};

export default Dashboard;