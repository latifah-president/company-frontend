import React from 'react';
import {
    FormWrapper,
    Form,
    ContactFormInput,
    SubmitButton,
    ContactFormGroup,
    GroupOne,
    ContactFormLabel,
    ContactTextArea,
} from './form-styles';

const ContactUs = () => {
  return (
      <FormWrapper >
          <Form form="contactform">
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
            
              
              {/* <Select/> */}

          </Form>
          <ContactFormGroup>
                  <GroupOne>
                  <ContactFormLabel for="budget">Choose Your Budget:</ContactFormLabel>
            < select  id="budget" name="budgetlist" form="contactform">
            <option value="$1500-$2500">$1500-$2500</option>
            <option value="$2500-$3500">$2500-$3500</option>
            <option value="$3500-$4500">$3500-$4500</option>
            <option value="$4500-$5500">$4500-$5500</option>
            <option value="$5500-$6500">$5500-$6500</option>
            <option value="$6500-$7500">$6500-$7500</option>
            <option value="$10,000 +">$10,000 +</option>
            </ select >
                  </GroupOne>
              </ContactFormGroup>
              <SubmitButton type='submit'>Submit</SubmitButton>

      </FormWrapper>
  );
}

export default ContactUs;