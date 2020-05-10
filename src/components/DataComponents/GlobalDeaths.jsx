import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './stylesheet.css'
import Table from 'react-bootstrap/Table'
import CovidDataService from '../../assets/api/CovidDataService.js'
import { default as NumberFormat } from 'react-number-format';
class GlobalDeaths extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TotalDeath: 0,
            Countries: []
        }
        this.refreshDeathCases = this.refreshDeathCases.bind(this)
    }

    componentDidMount() {
        this.refreshDeathCases();
    }

    refreshDeathCases() {
        CovidDataService.retreiveSummary().then(
            Response => {
                this.setState({
                    TotalDeath: Response.data.Global.TotalDeaths,
                    Countries: Response.data.Countries
                   
                })
            }
        )

    }
    render() {
        return (
            <div className="GlobalDeaths">
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Header>Global Deaths</Card.Header>
                    <Card.Header className="confirmeddata"><NumberFormat value={this.state.TotalDeath} displayType={'text'} format="### ###" /></Card.Header>
                    <Card.Body className="anyClass">
                        {/* <Card.Title ></Card.Title> */}
                        <Card.Text >
                            <Table responsive>
                                <tbody>
                                {
                                        this.state.Countries
                                        .sort((a, b) => a.TotalDeaths > b.TotalDeaths ? -1 : 1)
                                        .map(
                                            item =>
                                    <tr>
                                        <td>{item.Country}</td>
                                        <td><NumberFormat className="confirmeddata" value={item.TotalDeaths} displayType={'text'} format="#######" /></td>
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

export default GlobalDeaths