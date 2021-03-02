import React, {useState, useEffect} from 'react';
import ChartList from '../components/ChartList'


const ChartContainer = () => {

    const [chart, setChart] = useState({});
    const [loaded, setLoaded] = useState(false);

    const getChart = () => {
        console.log('Retrieving chart data');
        //fetch(`https://itunes.apple.com/gb/rss/topmovies/limit=20/json`)
        fetch(`https://itunes.apple.com/gb/rss/topmovies/entry/limit=20/json`)

        .then(res => res.json())
        .then(data => setChart(data))
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        getChart();
    }, [])

    return (
        <>
        <h1>I am chartcontainer</h1>
        <ChartList chart={chart} loaded={loaded}></ChartList>
        </>
    )
}

export default ChartContainer;