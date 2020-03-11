import React from 'react';
import {
    FormWrapper,
    Form,
    FormGroup,
    FormLabel,
    FormInput,
    SubmitButton,
} from './form-styles';
import { DarkTitle} from './../../Global_Styles/global-styles';

const UploadForm = () => {
  return (
      <FormWrapper  className='formgroup'>
          <DarkTitle>Apply For This Job</DarkTitle>
          <Form>
              <FormGroup>
                  <FormLabel for='email'>Email</FormLabel>
                  <FormInput name='email' id='email' placeholder='Enter Email' type='email'/>
              </FormGroup>
              <FormGroup>
                  <FormLabel for='name'>Name</FormLabel>
                  <FormInput name='name' id='name' placeholder='Enter Name' type='text'/>
              </FormGroup>
              <FormGroup>
                  <FormLabel for='phoneNumber'>Phone Number</FormLabel>
                  <FormInput name='phoneNumber' id='phoneNumber' placeholder='Enter Phone Number' type='tel'/>
              </FormGroup>
              <FormGroup style={{marginBottom: '2rem'}}>
                  <FormLabel for='resume'>Upload Resume</FormLabel>
                  <FormInput name='file' id='resume' placeholder='Upload Resume' type='file'/>
              </FormGroup>
          </Form>
          <SubmitButton>Submit Application</SubmitButton>
      </FormWrapper>
  );
}

export default UploadForm;