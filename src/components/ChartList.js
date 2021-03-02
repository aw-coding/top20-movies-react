import React from 'react';
import ChartItem from './ChartItem';

const ChartList = ({chart}) => {

    // const chartNodes = chart.map(topMovie => {
    //     return (
    //         <ChartItem>I am a chartitem from chartNodes</ChartItem>
    //     );
    // })

    return(
        <>
        <h1>I am a chartlist</h1>
        <ChartItem></ChartItem>
        </>
    )

}


export default ChartList;