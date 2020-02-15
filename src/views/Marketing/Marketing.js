import React, {useState} from 'react';
import LazyLoad from 'react-lazy-load';
import Aux from './../../HOC/Aux';
import {
    Wrapper, 
    ImageHeader, 
    Content, DarkTitle, 
    LightText,
    HeaderImage,
    OverlayLight,
    SmallSubTitle,
    Card,
    CardTitle,
    accentColor,
    SmallCardDes
} from './../../global-styles';
import {PackageArea, PackageAmount, PriceCard, AmountContent, PackageDetails, ExpandButton} from './marketing-styles';


const Marketing = () => {
    const [expand, setExpand] = useState(false);

    const toggle = () => {
      setExpand(!expand);
    }
    return (
        <Aux>
            <ImageHeader >
                <OverlayLight></OverlayLight>
                <LazyLoad  
                    debounce={false}
                    offsetVertical={500}>
                        <HeaderImage src={require('./../../assets/marketing-strategy.jpeg')} alt='Our Portfolio'/>
                </LazyLoad>
            </ImageHeader>
                <Wrapper>
                    <Content>
                        <header>
                            <DarkTitle>Marketing</DarkTitle>
                        </header> 
                        <LightText style={{width: '100%'}}>
                            We’re really good at working with our clients to increase 
                            their brand awareness and maximize their profitability and sales.
                        </LightText>                    
                    </Content>
            
                    <Content>
                        <header>
                            <DarkTitle>Marketing Packages</DarkTitle>
                        </header> 
                        <LightText >
                           At Cloud5 we offer a variety of packages to fit any client's projects. 
                           Whether you're looking for Social Media Management, SEO and Keyword Ranking, or a Full Scale 
                           Marketing Campaign, we have it all!                       All of our packages are completely customizable; we work
                           with clients to build the best packages for their needs.
                        </LightText>
                        <SmallSubTitle style={{fontSize: '1.5rem'}}>
                            Social Media Management Packages
                        </SmallSubTitle>
                        <PackageArea>                       
                            <PriceCard > 
                                <AmountContent>
                                <SmallCardDes style={{fontSize: '1rem', color: 'white', textTransform: 'uppercase', fontWeight: '500'}}>
                                        Social Media Plus
                                    </SmallCardDes>
                                    <PackageAmount style={{color: 'white'}}> <small >$</small> 3500</PackageAmount>
                                </AmountContent>
<                               PackageDetails>
                                    <ul>
                                        <li><b>4</b> post per week</li>
                                        <li>create on brand content</li>
                                        <li>incorporate a cohesive on brand aesthetic on <b>2</b> different social media platforms</li>
                                        <li>Create eye-catching graphics to match with the brand</li>
                                        <li><b>1</b> blog post</li>
                                        <li><b>$150</b> ad spend</li>
                                        <li><b>1</b> analytic report</li>

                                        <li className={expand ? null : 'hidden'}><b>1</b> micro influencer campaign</li>
                                        <li className={expand ? null : 'hidden'}><b>1</b> boosted post</li>
                                        <li className={expand ? null : 'hidden'}>Unique Content</li>
                                        <li className={expand ? null : 'hidden'}>Interactive Content calender</li>
                                        <li className={expand ? null : 'hidden'}>customer service Management</li>
                                        <li className={expand ? null : 'hidden'}>new follower and spam verification</li>
                                        <li className={expand ? null : 'hidden'}><b>1</b> 30-minute consultation call with your social media manager</li> 
                                    </ul>
                                    <ExpandButton aria-expanded='false'  onClick={() => {toggle()}}>View More</ExpandButton>
                                </PackageDetails>
                            </PriceCard>

                            <PriceCard > 
                            <AmountContent>
                            <SmallCardDes style={{fontSize: '1rem', color: 'white', textTransform: 'uppercase', fontWeight: '500'}}>
                                    Social Media Pro
                                </SmallCardDes>
                                <PackageAmount style={{color: 'white'}}> <small >$</small> 5500</PackageAmount>
                            </AmountContent>
<                               PackageDetails>
                                    <ul>
                                        <li>Daily posts a day per account</li>
                                        <li>Create on brand content</li>
                                        <li>incorporate a cohesive on brand aesthetic on <b>3</b> different social media platforms</li>
                                        <li>Create eye-catching graphics to match with the brand</li>
                                        <li><b>2</b> blog posts</li>
                                        <li><b>$150</b> ad spend</li>
                                        <li>bi weekly analytic reports</li>
                                        <li className={expand ? null : 'hidden'}><b>1</b> guest blogging campaign</li>
                                        <li className={expand ? null : 'hidden'}><b>1</b> micro influencer campaign</li>
                                        <li className={expand ? null : 'hidden'}><b>2</b> boosted post</li>
                                        <li className={expand ? null : 'hidden'}>Unique Content</li>
                                        <li className={expand ? null : 'hidden'}>Interactive Content calender</li>
                                        <li className={expand ? null : 'hidden'}>customer service Management</li>
                                        <li className={expand ? null : 'hidden'}>new follower and spam verification</li>
                                        <li className={expand ? null : 'hidden'}><b>2</b> 30-minute consultation call with your social media manager</li> 
                                    </ul>
                                    <ExpandButton aria-expanded='false'  onClick={() => {toggle()}}>View More</ExpandButton>
                                </PackageDetails>
                            </PriceCard>

                            <PriceCard > 
                            <AmountContent>
                            <SmallCardDes style={{fontSize: '1rem', color: 'white', textTransform: 'uppercase', fontWeight: '500'}}>
                                    Social Media Expert
                                </SmallCardDes>
                                <PackageAmount style={{color: 'white'}}> <small >$</small> 7000</PackageAmount>
                            </AmountContent>
<                               PackageDetails>
                                    <ul>
                                        <li>Daily posts a day per account</li>
                                        <li>Create on brand content</li>
                                        <li>incorporate a cohesive on brand aesthetic on <b>3</b> different social media platforms</li>
                                        <li>Create eye-catching graphics to match with the brand</li>
                                        <li><b>4</b> blog posts</li>
                                        <li><b>$250</b> ad spend</li>
                                        <li>weekly analytic reports</li>
                                        <li className={expand ? null : 'hidden'}><b>2</b> guest blogging campaigns</li>
                                        <li className={expand ? null : 'hidden'}><b>2</b> mid-level influencer campaign</li>
                                        <li className={expand ? null : 'hidden'}><b>4</b> boosted post a month</li>
                                        <li className={expand ? null : 'hidden'}>Unique Content</li>
                                        <li className={expand ? null : 'hidden'}>Interactive Content calender</li>
                                        <li className={expand ? null : 'hidden'}>customer service Management</li>
                                        <li className={expand ? null : 'hidden'}>new follower and spam verification</li>
                                        <li className={expand ? null : 'hidden'}>Weekly 15-minute consultation calls with your Social Media Manager
</li> 
                                    </ul>
                                    <ExpandButton aria-expanded='false'  onClick={() => {toggle()}}>View More</ExpandButton>
                                </PackageDetails>
                            </PriceCard>

                            <PriceCard > 
                            <AmountContent>
                            <SmallCardDes style={{fontSize: '1rem', color: 'white', textTransform: 'uppercase', fontWeight: '500'}}>
                                    Social Media Guru
                                </SmallCardDes>
                                <PackageAmount style={{color: 'white'}}> <small >$</small> 8500</PackageAmount>
                            </AmountContent>
<                               PackageDetails>
                                    <ul>
                                        <li><b>10</b> Daily posts a day per account</li>
                                        <li>Create on brand content</li>
                                        <li>incorporate a cohesive on brand aesthetic on <b>3</b> different social media platforms</li>
                                        <li>Create eye-catching graphics to match with the brand</li>
                                        <li><b>2</b> blog posts per week</li>
                                        <li><b>$250</b> ad spend</li>
                                        <li>weekly analytic reports</li>
                                        <li className={expand ? null : 'hidden'}><b>3</b> guest blogging campaigns</li>
                                        <li className={expand ? null : 'hidden'}><b>1</b> mid-level influencer campaign</li>
                                        <li className={expand ? null : 'hidden'}><b>1</b> mega-level influencer campaign</li>
                                        <li className={expand ? null : 'hidden'}><b>6</b> boosted post</li>
                                        <li className={expand ? null : 'hidden'}>Unique Content</li>
                                        <li className={expand ? null : 'hidden'}>Interactive Content calender</li>
                                        <li className={expand ? null : 'hidden'}>customer service Management</li>
                                        <li className={expand ? null : 'hidden'}>new follower and spam verification</li>
                                        <li className={expand ? null : 'hidden'}>social media manager on call M-F 9-5</li>
                                    </ul>
                                    <ExpandButton aria-expanded='false'  onClick={() => {toggle()}}>View More</ExpandButton>
                                </PackageDetails>
                            </PriceCard>
                        </PackageArea>
                    </Content>

                       {/* SEO PACKAGES */}
                       <Content>
                        <SmallSubTitle style={{fontSize: '1.5rem'}}>
                            SEO Packages
                        </SmallSubTitle>
                        <PackageArea seo>                       
                            <PriceCard > 
                                <AmountContent>
                                <SmallCardDes style={{fontSize: '1rem', color: 'white', fontWeight: '500'}}>
                                        SEO Plus
                                    </SmallCardDes>
                                    <PackageAmount style={{color: 'white'}}> <small >$</small> 2500</PackageAmount>
                                </AmountContent>
<                               PackageDetails>
                                    <ul>
                                        <li><b>10</b> keywords</li>
                                        <li>on page SEO</li>
                                        <li>Backlink Monitoring</li>
                                        <li>Monthly website audit with report</li>
                                        <li>Competitor analysis</li>
                                        <li>up to date rankings, traffic, and analytics</li>
                                        <li className={expand ? null : 'hidden'}>bi-weekly custom reports</li>
                                        <li className={expand ? null : 'hidden'}>daily maintenance</li>
                                    </ul>
                                    <ExpandButton aria-expanded='false'  onClick={() => {toggle()}}>View More</ExpandButton>

                                </PackageDetails>
                            </PriceCard>

                            <PriceCard > 
                            <AmountContent>
                            <SmallCardDes style={{fontSize: '1rem', color: 'white', fontWeight: '500'}}>
                                    SEO Pro
                                </SmallCardDes>
                                <PackageAmount style={{color: 'white'}}> <small >$</small> 3500</PackageAmount>
                            </AmountContent>
<                               PackageDetails>
                                    <ul>
                                        <li><b>20</b> keywords</li>
                                        <li>on page SEO</li>
                                        <li>bi-weekly website audit with report</li>
                                        <li>Competitor analysis</li>
                                        <li>up to date rankings, traffic, and analytics</li>
                                        <li>weekly custom reports</li>
                                        <li className={expand ? null : 'hidden'}>daily maintenance</li>
                                        <li className={expand ? null : 'hidden'}>Monthly market research with report</li>
                                    </ul>
                                    <ExpandButton aria-expanded='false'  onClick={() => {toggle()}}>View More</ExpandButton>
                                </PackageDetails>
                            </PriceCard>

                            <PriceCard > 
                            <AmountContent>
                            <SmallCardDes style={{fontSize: '1rem', color: 'white', textTransform: 'uppercase', fontWeight: '500'}}>
                                    SEO Expert
                                </SmallCardDes>
                                <PackageAmount style={{color: 'white'}}> <small >$</small> 7000</PackageAmount>
                            </AmountContent>
                            <PackageDetails>
                                    <ul>    
                                        <li><b>20</b> keywords</li>
                                        <li>on page SEO</li>
                                        <li>bi-weekly website audit with report</li>
                                        <li>Competitor analysis</li>
                                        <li>up to date rankings, traffic, and analytics</li>
                                        <li>weekly custom reports</li>
                                        <li className={expand ? null : 'hidden'}>daily maintenance</li>
                                        <li className={expand ? null : 'hidden'}>Monthly market research with report</li>
                                        <li className={expand ? null : 'hidden'}>PPC with Google Ad Words</li>
                                    </ul>
                                    <ExpandButton aria-expanded='false'  onClick={() => {toggle()}}>View More</ExpandButton>
                                </PackageDetails>
                            </PriceCard>


                        </PackageArea>
                    </Content>
                </Wrapper>
        </Aux>
    )
}

export default Marketing;

