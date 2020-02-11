import React, { Component } from 'react';
import {DarkTitle, } from './../../global-styles';
import { LayoutHeader, LayoutWrapper, LayoutTitle, } from './layout-styles';
import About from './../../views/about/About'

class Layout extends Component {
    constructor () {
        super ();
        this.state = {
            pageTitle: 'Title',
        }
    }

    changePageTitle = (title) => {
        this.setState({
            pageTitle: title
        })
    }

    //if small is true apply these styles
    render() {
        const {children, pageTitle} = this.props;
        console.log()
        return (
            <main>
                <LayoutHeader></LayoutHeader>
                <header>
                    <DarkTitle></DarkTitle>
                </header>
                {children}
                {/* <About title={this.state.pageTitle}/> */}
            </main>
            
        )
    }
    
    
};

export default Layout;