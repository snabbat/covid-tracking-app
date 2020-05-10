import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './stylesheet.css'
import Table from 'react-bootstrap/Table'
import CovidDataService from '../../assets/api/CovidDataService.js'
import { default as NumberFormat } from 'react-number-format';

class GlobalConfirmed extends Component {

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
            <div className="GlobalConfirmed">
                <Card border="light" style={{ width: '18rem',height:"60%" }}>
                    <Card.Header>Global confirmeddata</Card.Header>
                    <Card.Header className="confirmeddata"><NumberFormat value={this.state.TotalConfirmed} displayType={'text'} format="# ### ###" /></Card.Header>
                    <Card.Body className="anyClass">
                        {/* <Card.Title ></Card.Title> */}
                        <Card.Text >
                            <Table responsive>
                                <tbody>
                                    {
                                        this.state.Countries
                                        .sort((a, b) => a.TotalConfirmed > b.TotalConfirmed ? -1 : 1)
                                        .map(
                                            item =>
                                    <tr>
                                        <td>{item.Country}</td>
                                        <td><NumberFormat className="confirmeddata" value={item.TotalConfirmed} displayType={'text'} format="#######" /></td>
                                    </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export default GlobalConfirmed