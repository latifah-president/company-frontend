import React, {Component } from 'react';
import Aux from './../../HOC/Aux';
import {Wrapper, ImageHeader, Content, DarkTitle } from './../../global-styles';
import Layout from './../../components/Layout/Layout';

// class About extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         console.log(this.props.title, 'about props')
//         return (
//             // <Layout>
//             //     thisis the title
//             // </Layout>
//         <div>{this.props.title}</div>
//         )
//     }
// };

const About = (props) => {
    console.log(props, 'props from about')
    return (
        // <Wrapper>
        <Aux>
            <ImageHeader about></ImageHeader>
                <Wrapper>
                    <DarkTitle>About Us</DarkTitle>
                </Wrapper>
        </Aux>
            
            // {/* <Content>
            //     <header>
            //         <DarkTitle>About</DarkTitle>
            //     </header>
            // </Content>
            // {props.title} */}
        // </Wrapper>
    )
}

export default About;
