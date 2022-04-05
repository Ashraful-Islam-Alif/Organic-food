import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const DashboardDetails = ({ chart }) => {
    return (
        <div>
            <LineChart width={500} height={400} >
                <Line type="monotone" dataKey={"chart.sell"}></Line>
                <XAxis dataKey={"chart.month"}></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default DashboardDetails;