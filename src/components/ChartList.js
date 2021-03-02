import React from 'react';
import ChartItem from './ChartItem';

const ChartList = ({chart, loaded}) => {

    // const chartNodes = chart.map(topMovie => {
    //     return (
    //         <ChartItem>I am a chartitem from chartNodes</ChartItem>
    //     );
    // })

    if (!loaded){
        return <p>Loading...</p>
    }


    return(
        <>
        <h1>I am a chartlist</h1>
        <h2>This should read 'Itunes store': {chart.feed.author.name.label}</h2>
        <h2> {chart.feed.entry[0].rights.label}</h2>
        {/* <h2>{chart.feed.entry}</h2> */}
        {/* <ChartItem  title={chart.feed.entry.name}></ChartItem> */}
        </>
    )

}


export default ChartList;