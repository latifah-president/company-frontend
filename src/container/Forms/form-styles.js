import styled from 'styled-components';
import {lightGrayColor, darkColor, whiteColor, darkBlueColor, tabletsm, smrtphn, smrtphnsm, tabletmd} from '../../Global_Styles/global-styles';

export const FormWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    /* border: 1px solid blue; */

    @media only screen and (max-width: ${tabletmd}) {
        width: 100%;
    }
    @media only screen and (max-width: ${tabletsm}) {
        width: 100%;
    }
  
    @media only screen and (max-width: ${smrtphn}) {
        width: 100%;
    }
`;
export const Form = styled.form`
    width: 100%;
    /* border: 1px solid teal; */
`;

export const FormGroup = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 10vh;
    /* width: 70%; */
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
  width: 60%;
  border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  font-size: .8rem;
  border-left: 1px solid ${lightGrayColor};
    border-right: none;
    border-top: .9px solid ${lightGrayColor};
    border-bottom: .9px solid ${lightGrayColor};
  /* border: 1px solid green; */
padding: .8rem;
height: 1rem;
  /* height: 50px;  */


   
    
`;

export const SubmitButton = styled.button`
    background: none;
    color: ${whiteColor};
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.875rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    align-self: flex-end;
    border-radius: .5rem;
    /* border: 1px solid white; */
    /* border-image: initial; */
    text-decoration: none;
    background-color: ${darkBlueColor};
    /* background-repeat:no-repeat; */
    /* overflow: hidden; */
    height: 60px;
    width: 30%;
    @media only screen and (max-width: ${tabletsm}) {
       width: 100%;
    }
`;

export const TextArea = styled.input`
    height: 100px;
    display: block;
    /* border: 1px solid red; */
`;

export const ContactFormGroup = styled.section`
    display: flex;
   justify-content: space-around;
   text-align: ${props => props.radio ? 'center' : null};
   justify-content: ${props => props.radio ? 'center': null};
   flex-direction: ${props => props.radio ? 'column' : null};
   width: ${props => props.radio ? '20%' : null};

    margin: 0 auto;
 
    @media only screen and (max-width: ${smrtphn}) {
        flex-direction: ${props => props.column ? 'column' : null};
       
    }
    
`;

export const RadioContainer = styled.div`
    display: flex;
    margin: 2rem 0;
 
`;
// export const GroupOne = styled.section`
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: ${props => props.idea ? '100px' : null};
//     border: 1px solid orange;
// `;

export const ContactFormInput = styled.input`
  padding: 1rem 0;
  font-size: .7rem;
  background: none;
  width: ${props => props.large ? '90%' : '40%'};
  border-radius: .5rem;
  padding: 1rem;
  margin-top: ${props => props.margin ? '1rem' : null};
  font-size: 1rem;
  border: .5px solid #374785;
  @media only screen and (max-width: ${smrtphn}) {
        width: ${props => props.name ? '90%' : null};
       
    }
    
`;

export const RadioInput = styled.input`
    margin: 0 auto;
    border: 10px solid red;
    
    .chkbox {
        border-radius: 50%;
    }
  
`;

export const RadioLabel = styled.label`
  height: 40px;
  margin-top: 1rem;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
    /* border: 1px solid black; */
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
  height: 150px;
  box-sizing: border-box;
  background: none;
  resize: none;
  border-radius: .5rem;
  padding: 1rem;
  border: .5px solid #374785;
  margin-top: 2rem;
  font-size: 1rem;
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