import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Divider, Typography } from '@mui/material';
import { BLUE_COLOUR, LIGHT_GRAY_COLOUR, LIGHT_GREY_COLOUR } from '../CommonStyle/Color';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


function DataChart() {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    let data = {
        labels,
        datasets: [
            {
                label: 'Visitors',
                data: [33, 53, 34, 54, 35, 55],
                backgroundColor: '#9c4be7',
                borderColor: '#9c4be7',
                pointRadius: 0,
                tension: 0.5,
                radius: 5,
            },
        ],
    };


    const options = {
        responsive: true,
        aspectRatio: false,
        interaction: {
            intersect: false,
        },
        plugins: {
            legend: {
                display: false,
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle"
                }
            },
            title: {
                display: false,
                text: "Rooba Finance"
            },
        },
        scales: {
            xAxis: {
                grid: {
                    display: true,
                    borderColor: 'black',
                    color: LIGHT_GRAY_COLOUR,
                    tickColor: 'black',
                },
            },
            yAxis: {
                grid: {
                    display: true,
                    color: LIGHT_GREY_COLOUR,
                    borderColor: 'black',
                    tickColor: 'black',
                },
                ticks: {
                    color: 'black',
                },
                title: {
                    display: true,
                    text: "Visitors",
                    font: {
                        weight: "bold",
                    },
                    color: "darkslateblue"
                }
            }
        },
    };


    return (
        <React.Fragment>
            <Box sx={{ backgroundColor: LIGHT_GREY_COLOUR, borderRadius: 5, paddingBottom: 5, paddingX: 5, paddingTop: 2 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 25 }}>
                    <Typography variant='subtitle1'>Total Visits</Typography>
                    <Typography variant='h5' sx={{ color: BLUE_COLOUR, fontWeight: "bold" }}>42,430 M</Typography>
                </div>
                <Divider />
                <Box mt={3} >
                    <Line data={data} options={options} height={300} width={200} />
                </Box>
            </Box>
        </React.Fragment>
    );
}
export default DataChart;