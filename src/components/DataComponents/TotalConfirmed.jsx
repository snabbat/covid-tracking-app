import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './stylesheet.css'
import CovidDataService from '../../assets/api/CovidDataService.js'
import { default as NumberFormat } from 'react-number-format';
class TotalConfirmed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TotalConfirmed: 0,
            Countries: []
        }
        this.refreshConfirmedCases = this.refreshConfirmedCases.bind(this)
    }

    componentDidMount() {
        this.refreshConfirmedCases();
    }

    refreshConfirmedCases() {
        CovidDataService.retreiveSummary().then(
            Response => {
                this.setState({
                    TotalConfirmed: Response.data.Global.TotalConfirmed,
                    Countries: Response.data.Countries
                   
                })
            }
        )

    }





    render() {
        return (
            <div className="TotalConfirmed">
                <Card  style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><h6>Total Confirmed Cases</h6></Card.Title>
                        <Card.Text>
                        <h3 className="confirmeddata"> <NumberFormat value={this.state.TotalConfirmed} displayType={'text'} format="# ### ###" /> </h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
             </div >
        )
    }
}

export default TotalConfirmed