import styled from 'styled-components';
import {lightGrayColor, darkColor, whiteColor, } from '../../views/Careers/careers-styles';

export const FormWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 2rem;
    width: 100%;
    /* border: 1px solid red; */
`;
export const Form = styled.form`
    width: 80%;
    /* border: 1px solid teal; */
`;

export const FormGroup = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 10vh;
    width: 70%;
    /* border: 1px solid black; */

    @media only screen and (max-width: 600px) {
        width: 100%;
       
    }
    
`;

export const FormLabel = styled.label`
    color: ${darkColor};
    font-size: 1rem;
    line-height: 1.75rem;
    margin-top: 2rem;
    /* border: 1px solid pink; */
`;

export const FormInput = styled.input`
  width: 70%;
  height: 50px; 
  padding: 1rem 0;
  font-size: .7rem;
    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 500px;
        /* border: 1px solid blue; */
    }
    
`;

export const SubmitButton = styled.button`
    background: none;
    color: ${whiteColor};
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.875rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    border: 1px solid white;
    border-image: initial;
    text-decoration: none;
    background-color: #B0001E;
    background-repeat:no-repeat;
    overflow: hidden;
    height: 50px;
    /* width: 12%; */
    align-self: flex-start;
    margin-left: 15.6rem;
    @media only screen and (max-width: 600px) {
        display: block;
        margin: 2rem auto 0 auto;
    }
`;

export const TextArea = styled.input`
    height: 100px;
    display: block;
    /* border: 1px solid red; */
`;

export const ContactFormGroup = styled.section`
    display: flex;
    justify-content: ${props => props.idea ? null : 'space-around'};
    margin: 0 auto;
    height: 10vh;
    width: ${props => props.idea ? '63%' : '70%'};
    /* border: 1px solid black; */

    @media only screen and (max-width: 600px) {
        width: 100%;
       
    }
    
`;

export const GroupOne = styled.section`
    display: flex;
    flex-direction: column;
    width: ${props => props.idea ? '100%' : '40%'};
    height: ${props => props.idea ? '100px' : null};
    /* border: 1px solid orange; */
`;

export const ContactFormInput = styled.input`
  padding: 1rem 0;
  font-size: .7rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${lightGrayColor};
    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 500px;
        /* border: 1px solid blue; */
    }
    
`;


export const ContactFormLabel = styled.label`
    color: ${darkColor};
    font-size: 1rem;
    /* border: 1px solid pink; */
    @media only screen and (max-width: 600px) {
       margin-top: ${props => props.message ? '2rem' : null};
        /* border: 1px solid blue; */
    }
`;

export const ContactTextArea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  resize: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${lightGrayColor};
  margin-bottom: 2rem;
`;

export const SelectBudget = styled.select`
    width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  resize: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px so
`;