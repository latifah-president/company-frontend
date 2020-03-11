import React from 'react';
import ContactUs from './../Forms/ContactUs';
import {
    FormWrapper,
} from './form-styles';

const ContactForm = () => {
  return (
      <FormWrapper >
          <ContactUs/>
          {/* <Form>
          <ContactFormGroup>
              <GroupOne>
              <ContactFormLabel for='name'>Name</ContactFormLabel>
                  <ContactFormInput name='name' id='name'  type='text'/>
              </GroupOne>
              <GroupOne>
              <ContactFormLabel for='email'>Email</ContactFormLabel>
                  <ContactFormInput name='email' id='email'  type='email'/>
              </GroupOne>
                 
              </ContactFormGroup>
              <ContactFormGroup idea>
                  <GroupOne idea>
                    <ContactFormLabel message for='idea'>Pitch Us Your Idea</ContactFormLabel>
                    <ContactTextArea name='idea' id='idea'  type='text' />
                  </GroupOne>
                  
              </ContactFormGroup>
              <SubmitButton type='submit'>Submit</SubmitButton>
          </Form> */}
      </FormWrapper>
  );
}

export default ContactForm;