import React, {useState, } from 'react';
import {
    FormWrapper,
    Form,
    ContactFormInput,
    ContactFormGroup,
    RadioInput,
    RadioLabel,
    ContactTextArea,
    RadioContainer
} from './form-styles';
import {SubmitButton} from './../../Global_Styles/global-styles';

const ContactUs = () => {
    const [isChecked, setChecked] = useState(false);
    const [options, setOptions] = useState([]);

    const handleChange = (event) => {
        // event.preventDefault()
        // let chkbox = []
        // chkbox.push(...event.target.value)
        console.log(event.target.value)
        setOptions(...options, event.target.value)
    }



    console.log(options, 'options')
  return (
      <FormWrapper >
          <Form form="contactform">
          <ContactFormGroup column>
                <ContactFormInput name='firstName' id='name'  type='text' placeholder='First Name'/>
                <ContactFormInput margin name='lastName' id='name'  type='text' placeholder='Last Name'/>
        </ContactFormGroup>

        <ContactFormGroup>
            <ContactFormInput large margin name='email' id='name'  type='text' placeholder='Email'/>
        </ContactFormGroup>

        <ContactFormGroup>
            <ContactTextArea name='idea' id='idea'  type='text' placeholder='Your Message' />
        </ContactFormGroup>

        <RadioContainer radio around style={{width: '100%'}}>

            <ContactFormGroup radio >
                <RadioInput className='chkbox' type='checkbox' id='development' name='service_needed' value='Development' onClick={handleChange}/>
                <RadioLabel htmlFor='development'>Web</RadioLabel>
            </ContactFormGroup>

            <ContactFormGroup radio>
                <RadioInput type='checkbox' id='marketing' name='service_needed' value='Marketing' onClick={handleChange}/>
                <RadioLabel htmlFor='marketing'>Mobile</RadioLabel>
            </ContactFormGroup>

            <ContactFormGroup radio>
                <RadioInput type='checkbox' id='specialProjects' name='service_needed' value='Special Projects'  onClick={handleChange}/>
                <RadioLabel htmlFor='specialProjects'>Marketing</RadioLabel>
            </ContactFormGroup>

            <ContactFormGroup radio>
                <RadioInput type='checkbox' id='bussinessDev' name='service_needed' value='Bussiness Development'  onClick={handleChange}/>
                <RadioLabel htmlFor='bussinessDev'>Business</RadioLabel>
            </ContactFormGroup>

        </RadioContainer>
  
          </Form>
          {/* <ContactFormGroup>
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
              </ContactFormGroup> */}
              <SubmitButton type='submit'>Send</SubmitButton>

      </FormWrapper>
  );
}

export default ContactUs;