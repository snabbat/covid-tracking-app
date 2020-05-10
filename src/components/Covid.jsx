import React, { Component } from 'react'
import ChartComponent from './DataComponents/ChartComponent.jsx'
import MapComponent from './DataComponents/MapComponent.jsx'
import TotalConfirmed from './DataComponents/TotalConfirmed.jsx'
import GlobalConfirmed from './DataComponents/GlobalConfirmed.jsx'
import GlobalRecovered from './DataComponents/GlobalRecovered.jsx'
import GlobalDeaths from './DataComponents/GlobalDeaths.jsx'
import LastUpdated from './DataComponents/LastUpdated.jsx'
import '../assets/css/stylesheet.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
class Covid extends Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome to the Covid Application</h1>
                <div className="float-right">
                    <TotalConfirmed />
                    <GlobalConfirmed />
                   
                </div>
                {/* <ChartComponent/> */}
                <ChartComponent/>
                <div className="float-left">
                    <Tabs defaultActiveKey="deaths" >
                        <Tab eventKey="deaths" title="Total Deaths">
                            <GlobalDeaths />
                        </Tab>
                        <Tab eventKey="recovered" title="Total Recovered">
                            <GlobalRecovered />
                        </Tab>
                    </Tabs>
                    <LastUpdated />
                </div>
            </div>
        )
    }
}

export default Covid