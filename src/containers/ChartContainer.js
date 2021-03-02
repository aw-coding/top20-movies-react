import React, {useState, useEffect} from 'react';
import ChartList from '../components/ChartList'


const ChartContainer = () => {

    const [chart, setChart] = useState({});

    const getChart = () => {
        console.log('Retrieving chart data');
        fetch(`https://itunes.apple.com/gb/rss/topmovies/limit=20/json`)
        .then(res => res.json())
        .then(data => setChart(data))
    }

    useEffect(() => {
        getChart();
    }, [])

    return (
        <>
        <h1>I am chartcontainer</h1>
        <ChartList chart={chart}></ChartList>
        </>
    )
}

export default ChartContainer;