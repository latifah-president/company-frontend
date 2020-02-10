import styled from 'styled-components';

export const MissionWrapper = styled.section`
    display: flex;
    /* flex-direction: column; */
    border: 2px solid green;
`;

export const MissionContent = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    border: 1px solid black;
`;
export const MissionHeader = styled.header`
    /* border: 1px solid pink; */
`;

export const MissionTitle = styled.h2`
    /* border: 1px solid teal; */
`;

export const MissionText = styled.p`
    width: 90%;
    font-size: 1.2rem;
    border: 1px solid blue;
`;

export const MissionImage = styled.div`
    border: 1px solid salmon;
    width: 50%;
    height: 20%;
`;