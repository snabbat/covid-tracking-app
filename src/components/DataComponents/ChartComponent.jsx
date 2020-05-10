import React, { Component } from 'react';
import CanvasJSReact from '../../assets/jss/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ChartComponent extends Component {
    render() {
        const options = {
            title: {
                text: "Daily Cases Chart // under construction"
            },
            animationEnabled: true,
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: [
                        { label: "Apple", y: 10 },
                        { label: "Orange", y: 15 },
                        { label: "Banana", y: 25 },
                        { label: "Mango", y: 30 },
                        { label: "Grape", y: 28 }
                    ]
                }
            ]
        }

        return (
            <div className="CharComponent float-right" style={{ height: '400px', width: '400px' }}>
            
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default ChartComponent;