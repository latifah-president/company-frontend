import React, {useEffect, useState} from 'react';
import { HomeWrapper, Tag, TagLineContent} from './splashScreen-styles';
import './splashScreen.css'

const LandingPage = () => {
    const [header, setHeader] = useState('Dreamers');

    useEffect(() => {
      const headers = [ 'builders', 'listeners', 'Growers', 'dreamers']
      let i = 0;
      setInterval(function() {
        setHeader(headers[i])
          if (i === (headers.length - 1)) {
            i = 0;
          } else {
            i++;
          }
      }, 1500)
    }, [])

    return (
    <HomeWrapper>
          <Tag>
            <TagLineContent>WE ARE <span>{header}</span></TagLineContent>
            <TagLineContent mobile>WE ARE <br/> <br/> <br/> <span>{header}</span></TagLineContent>
        </Tag>
    </HomeWrapper>
    )
}

export default LandingPage;


