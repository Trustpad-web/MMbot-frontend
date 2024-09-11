import React from 'react'
import { AdvancedChart } from 'react-tradingview-embed'

const ApexChart = () => {

    // width?: string | number;
    // height?: string | number;
    // autosize?: boolean;
    // symbol?: string;
    // interval?: string;
    // range?: string;
    // timezone?: string;
    // theme?: string;
    // style?: string;
    // locale?: string;
    // toolbar_bg?: string;
    // hide_top_toolbar?: boolean;
    // hide_side_toolbar?: boolean;
    // withdateranges?: boolean;
    // save_image?: boolean;
    // enable_publishing?: boolean;
    // allow_symbol_change?: boolean;
    // container_id?: string;

    const options = {
        theme: "dark",
        width: "100%",
        interval: "D",
        hide_legend: true,
        hide_side_toolbar: true,
        hide_top_toolbar: true,
        hide_volume: true,
        calendar: true,
        save_image: false,
        autosize: false,
        enable_publishing: false,
        withdateranges: false,
        symbol: "AAPL",
        backgroundColor: "#212F40",
        timezone: "exchange",
        style: "1",
        support_host: "https://www.tradingview.com"
    }

    return (
        <AdvancedChart widgetProps={options} />
    )
}

export default ApexChart
