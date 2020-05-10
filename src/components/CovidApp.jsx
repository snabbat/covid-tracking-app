import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './Header/HeaderComponent.jsx'
import FooterComponent from './Footer/FooterComponent.jsx'
import ErrorComponent from './ErrorComponents/ErrorComponent.jsx'
import Covid from './Covid.jsx'
class CovidApp extends Component {
    render() {
        return (
            <div className="CovidApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={Covid}/>
                            {/* <Route path="/login" component={}/>
                            <Route path="/logout" component={}/> */}
                           
                            
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}

export default CovidApp