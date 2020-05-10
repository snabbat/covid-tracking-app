import React, { Component } from 'react'
import './stylesheet.css'
class FooterComponent extends Component {

    render() {
        return (
            <div className="fixed-bottom">
                <footer className="footer" >
                    <span className="text-muted">All Rights Reserved 2020 Covid Application By - 
                      <a href="https://www.linkedin.com/in/soufiane-nabbat-7ab402b6/" target="_blank"> Soufiane Nabbat</a></span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent