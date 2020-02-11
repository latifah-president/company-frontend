import React, { Component } from 'react';
import {DarkTitle, } from './../../global-styles';
import { PageHeader, PageWrapper, PageTitle, } from './pages-styles';

class Pages extends Component {
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
        const {children} = this.props;
        return (
            <main>
                <PageHeader></PageHeader>
                <DarkTitle>{this.state.pageTitle}</DarkTitle>
                {children}
            </main>
            
        )
    }
    
    
};

export default Pages