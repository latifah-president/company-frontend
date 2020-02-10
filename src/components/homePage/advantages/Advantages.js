import React from 'react';
import {
    AdvantagesWrapper,
    AdvantagesContent, 
    AdvatagesTitle, 
    AdvantagesBox, 
    AdvantagesBoxTitle, 
    AdvantagesBoxText,
} from './advantages-styles'
const Advantages = () => {
    return (
        <AdvantagesWrapper>
            <header>
                <AdvatagesTitle>Why Choose Us?</AdvatagesTitle>
            </header>
            <AdvantagesContent>
            <AdvantagesBox>
                <AdvantagesBoxTitle>Unlimited Revisions</AdvantagesBoxTitle>
                <AdvantagesBoxText>
                    In most cases, Cloud5 offers free unlimited revisions to your project. 
                    When you choose us you choose perfection, 
                    we never stop working until you’re completely satisfied. 
                    This way we guaranty that you’ll get your money’s worth.
                </AdvantagesBoxText>
            </AdvantagesBox>
            <AdvantagesBox>
                <AdvantagesBoxTitle>Industry Leading Prices</AdvantagesBoxTitle>
                <AdvantagesBoxText>
                    They say it pays well to be the best. 
                    But it pays more to be the best and the most affordable.
                    We are really good at coming up with flexible payment arrangements, 
                    and don’t tell anyone, but sometimes we’re even willing to price match.
                </AdvantagesBoxText>
            </AdvantagesBox>
            <AdvantagesBox>
                <AdvantagesBoxTitle>Industry Leading Prices</AdvantagesBoxTitle>
                <AdvantagesBoxText>
                    If you’ve been turned away by everyone else in 
                    the market place because they feel like your project is to complicated.
                    You’ve come to the right place. We love to innovate, and we don’t often 
                    turn away prospects with crazy ideas, in fact, those are exactly the type of client’s we love.
                </AdvantagesBoxText>
            </AdvantagesBox>
            </AdvantagesContent>
        </AdvantagesWrapper>
    )
};

export default Advantages;