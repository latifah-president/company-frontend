import React, { useState } from 'react';
import Aux from './../../HOC/Aux';
import {CardImage, CardDesLink } from './../../global-styles';
import {TabsWrapper, TabContainer, TabsContent, PortfolioCard, TabsCardSection, } from './portfolio-styles';
import './portfolio.css';

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
    console.log('toggling')
  }

  return (   
<Aux>
      <TabsWrapper>
        <TabContainer>
            <div onClick={ () => {toggle('1')}} className={activeTab === '1' ? 'activeTab' : 'tabs'} >
                Shopify
            </div>
            <div onClick={ () => {toggle('2')}} className={activeTab === '2' ? 'activeTab' : 'tabs'}>
                WordPress
            </div>
            <div onClick={() => {toggle('3')}} className={activeTab === '3' ? 'activeTab' : 'tabs'}>
                HTML
            </div>
            <div onClick={() => {toggle('4')}} className={activeTab === '4' ? 'activeTab' : 'tabs'}>
                Core PHP
            </div>
            <div onClick={() => {toggle('5')}} className={activeTab === '5' ? 'activeTab' : 'tabs'}>
                App Design and Develoment
            </div>
            <div onClick={() => {toggle('6')}} className={activeTab === '6' ? 'activeTab' : 'tabs'}>
                Web Develoment
            </div>
            <div onClick={() => {toggle('7')}} className={activeTab === '7' ? 'activeTab' : 'tabs'}>
                Android Develoment
            </div>
            <div onClick={() => {toggle('8')}} className={activeTab === '8' ? 'activeTab' : 'tabs'}>
                IOS Develoment
            </div>
        </TabContainer>
         
      </TabsWrapper>
            <TabsContent className={activeTab === '1' ? 'active' : 'inActive'}>
                <PortfolioCard style={{border: 'none'}}>
                    <CardImage src={require('./../../assets/shopify_ex1.png')}/>
                    <CardDesLink href='https://luxxlyco.com/' style={{width: '65%'}}>Luxxlyco</CardDesLink>
                </PortfolioCard>
        </TabsContent>
        <TabsContent className={activeTab === '2' ? 'active' : 'inActive'}>
            <TabsCardSection>
                <PortfolioCard style={{border: 'none'}} >
                        <CardImage src={require('./../../assets/wordpress-ex1.png')}/>
                        <CardDesLink href='http://www.fullscalemedia.com/' style={{width: '65%'}}>Full Scale Media</CardDesLink>
                </PortfolioCard>

                <PortfolioCard >
                        <CardImage src={require('./../../assets/picadilly-group.png')}/>
                        <CardDesLink href='https://www.piccadillygroup.com/' style={{width: '65%'}}>Piccadilly Group</CardDesLink>
                </PortfolioCard>
            </TabsCardSection>
           
        </TabsContent>
        <TabsContent className={activeTab === '3' ? 'active' : 'inActive'}>
          
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
        </Aux>
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