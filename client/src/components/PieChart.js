import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import { useLocalStorage } from '../hooks/useLocalStorage';


export const PieChart = props => {
    const [ config ] = useLocalStorage('config', props);

    const {labels, data, colors} = config;


    const pieData = {
        labels: labels,
        datasets: [
            {
            data: data,
            backgroundColor: colors
            }
        ]
    }

    const options = {
        legend: {
            position: 'left'
        }
    }
    return (
        <ChartWrap>
          <Pie data={pieData} options={options} />
        </ChartWrap>
    )
}

const ChartWrap = styled.div`
    background: white;
    border-radius: 5px;
    padding: 2rem;
    max-width: 550px;
    width: 100%;
`