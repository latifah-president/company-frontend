import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {accentColor, LightText, SmallWhiteTitle, } from './../../global-styles';
import {TabsWrapper, TabContainer, Tabs, TabsContent, } from './portfolio-styles';
import './portfolio.css';

const PortfolioTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
    console.log('toggling')
  }

  return (     
      <TabsWrapper>
        <TabContainer>
           
            <Tabs onClick={ () => {toggle('1')}}>
                Shopify
            </Tabs>
            <Tabs onClick={ () => {toggle('2')}}>
                WordPress
            </Tabs>
            <Tabs onClick={() => {toggle('3')}}>
                HTML
            </Tabs>
            <Tabs onClick={() => {toggle('4')}}>
                Core PHP
            </Tabs>
            <Tabs onClick={() => {toggle('5')}}>
                App Design and Develoment
            </Tabs>
            <Tabs onClick={() => {toggle('6')}}>
                Web Develoment
            </Tabs>
            <Tabs onClick={() => {toggle('7')}}>
                Android Develoment
            </Tabs>
            <Tabs onClick={() => {toggle('8')}}>
                IOS Develoment
            </Tabs>
        </TabContainer>
        <TabsContent className={activeTab === '1' ? 'active' : 'inActive'}>
            <h3  >Active 1</h3>
        </TabsContent>
        <TabsContent className={activeTab === '2' ? 'active' : 'inActive'}>
            <h3  >Active 2</h3>
        </TabsContent>
        <TabsContent className={activeTab === '3' ? 'active' : 'inActive'}>
            <h3  >Active 3</h3>
        </TabsContent>
        <TabsContent className={activeTab === '4' ? 'active' : 'inActive'}>
            <h3  >Active 4</h3>
        </TabsContent>
        <TabsContent className={activeTab === '5' ? 'active' : 'inActive'}>
            <h3  >Active 5</h3>
        </TabsContent>
        <TabsContent className={activeTab === '6' ? 'active' : 'inActive'}>
            <h3  >Active 6</h3>
        </TabsContent>
        <TabsContent className={activeTab === '7' ? 'active' : 'inActive'}>
            <h3  >Active 7</h3>
        </TabsContent>
        <TabsContent className={activeTab === '8' ? 'active' : 'inActive'}>
            <h3  >Active 8</h3>
        </TabsContent>       
      </TabsWrapper>
    // <div>
    //   <Nav tabs>
    //     <NavItem>
    //       <NavLink
    //         className={classnames({ active: activeTab === '1' })}
    //         onClick={() => { toggle('1'); }}
            
    //       >
    //         Shopify
    //       </NavLink>
    //     </NavItem>
    //     <NavItem>
    //       <NavLink
    //         className={classnames({ active: activeTab === '2' })}
    //         onClick={() => { toggle('2'); }}
    //       >
    //         WordPress
    //       </NavLink>
    //     </NavItem>
    //     <NavItem>
    //       <NavLink
    //         className={classnames({ active: activeTab === '3' })}
    //         onClick={() => { toggle('3'); }}
    //       >
    //         HTML
    //       </NavLink>
    //     </NavItem>
    //     <NavItem>
    //       <NavLink
    //         className={classnames({ active: activeTab === '4' })}
    //         onClick={() => { toggle('4'); }}
    //       >
    //         Core PHP
    //       </NavLink>
    //     </NavItem>
    //     <NavItem>
    //       <NavLink
    //         className={classnames({ active: activeTab === '5' })}
    //         onClick={() => { toggle('5'); }}
    //       >
    //         App Design and Develoment
    //       </NavLink>
    //     </NavItem>
    //     <NavItem>
    //       <NavLink
    //         className={classnames({ active: activeTab === '6' })}
    //         onClick={() => { toggle('6'); }}
    //       >
    //         Website Builds
    //       </NavLink>
    //     </NavItem>
    //   </Nav>
    //   <TabContent activeTab={activeTab}>
    //     <TabPane tabId="1">
    //       <Row>
    //         <Col sm="12">
    //           <h4>Tab 1 Contents</h4>
    //         </Col>
    //       </Row>
    //     </TabPane>
    //     <TabPane tabId="2">
    //       <Row>
    //         <Col sm="6">
    //           <Card body>
    //             <CardTitle>Special Title Treatment</CardTitle>
    //             <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    //             <Button>Go somewhere</Button>
    //           </Card>
    //         </Col>
    //         <Col sm="6">
    //           <Card body>
    //             <CardTitle>Special Title Treatment</CardTitle>
    //             <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    //             <Button>Go somewhere</Button>
    //           </Card>
    //         </Col>
    //       </Row>
    //     </TabPane>
    //   </TabContent>
    // </div>
  );
}

export default PortfolioTabs;