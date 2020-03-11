import React from 'react';
import Aux from '../../HOC/Aux';
import {ContactFormLabel, } from './form-styles';

const Select= () => {
    return (
        <Aux>
            <ContactFormLabel for="budget">Choose Your Budget:</ContactFormLabel>
            <select id="budget" name="budgetlist" form="contactform">
            <option value="$1500-$2500">$1500-$2500</option>
            <option value="$2500-$3500">$2500-$3500</option>
            <option value="$3500-$4500">$3500-$4500</option>
            <option value="$4500-$5500">$4500-$5500</option>
            <option value="$5500-$6500">$5500-$6500</option>
            <option value="$6500-$7500">$6500-$7500</option>
            <option value="$10,000 +">$10,000 +</option>
            </select>
        </Aux>

    )
}

export default Select