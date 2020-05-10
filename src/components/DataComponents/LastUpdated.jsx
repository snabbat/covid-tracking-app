import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './stylesheet.css'
import CovidDataService from '../../assets/api/CovidDataService.js'
import { default as NumberFormat } from 'react-number-format';
class LastUpdated extends Component {
    constructor(props) {
        super(props)
        this.state = {
            LastUpdatedAt: ''
        }
        this.refreshConfirmedCases = this.refreshConfirmedCases.bind(this)
    }
    componentDidMount() {
        this.refreshConfirmedCases();
    }

    refreshConfirmedCases() {
        CovidDataService.retreiveSummary().then(
            Response => {
                console.log(Response.data.Date)
                this.setState({
                     LastUpdatedAt: Response.data.Date              
                })
            }
        )

    }





    render() {
        return (
            <div className="LastUpdated">
                <Card  style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h6>Last Refreshed at</h6></Card.Title>
                        <Card.Text>
                        <h5 className="lastrefreshed"> {this.state.LastUpdatedAt} </h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
             </div >
        )
    }
}

export default LastUpdated