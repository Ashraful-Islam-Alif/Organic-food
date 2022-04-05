import React, { useEffect, useState } from 'react';
import DashboardDetails from '../DashboardDetails/DashboardDetails';

const Dashboard = () => {
    const [charts, setCharts] = useState([])
    useEffect(() => {
        fetch('rechartData.json')
            .then(res => res.json())
            .then(data => setCharts(data))
    }, [])
    return (


        <div>
            {
                charts.map(chart => <DashboardDetails
                    chart={chart}
                ></DashboardDetails>

                )
            }
        </div>

    );
};

export default Dashboard;