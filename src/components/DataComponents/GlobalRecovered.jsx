import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './stylesheet.css'
import Table from 'react-bootstrap/Table'
import CovidDataService from '../../assets/api/CovidDataService.js'
import { default as NumberFormat } from 'react-number-format';

class GlobalRecovered extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TotalRecovered: 0,
            Countries: []
        }
        this.refreshRecoveredCases = this.refreshRecoveredCases.bind(this)
    }

    componentDidMount() {
        this.refreshRecoveredCases();
    }

    refreshRecoveredCases() {
        CovidDataService.retreiveSummary().then(
            Response => {
                console.log(Response.data.Global)
                this.setState({
                    TotalRecovered: Response.data.Global.TotalRecovered,
                    Countries: Response.data.Countries
                   
                })
            }
        )

    }
    render() {
       
        return (
            <div className="GlobalRecovered">
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Header>Global Recovered</Card.Header>
                    <Card.Header className="recovereddata"><NumberFormat value={this.state.TotalRecovered} displayType={'text'} format="# ### ###" /></Card.Header>
                    <Card.Body className="anyClass">
                        {/* <Card.Title ></Card.Title> */}
                        <Card.Text >
                            <Table responsive>
                                <tbody>
                                {
                                        this.state.Countries
                                        .sort((a, b) => a.TotalRecovered > b.TotalRecovered ? -1 : 1)
                                        .map(
                                            item =>
                                    <tr>
                                        <td>{item.Country}</td>
                                        <td><NumberFormat className="recovereddata" value={item.TotalRecovered} displayType={'text'} format="#######" /></td>
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

export default GlobalRecovered