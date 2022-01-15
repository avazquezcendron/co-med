import React, { Fragment, useState,useEffect } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const primary = localStorage.getItem('primary_color') || "#4466f2";

const boxMullerRandom = () => {
    let phase = false,
        x1, x2, w;

    return (function () {
    // eslint-disable-next-line
        if (phase = !phase) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);

            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        } else {
            return x2 * w;
        }
    })();
}

const LiveChart = () => {

    const [chartData,setChartData] = useState([]);

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setChartData(chartData.concat([boxMullerRandom()]))
        }, 500);
        return () => clearInterval(interval);
    },[chartData])
   
    return (
        <Fragment>
            <div className="flot-chart-placeholder" id="cpu-updating">
                <Sparklines data={chartData} limit={20}>
                    <SparklinesLine color={primary} style={{ strokeWidth: 0.4 }} />
                </Sparklines>
            </div>

        </Fragment>
    );
    }

export default LiveChart;