import { isEmpty } from './lodash';

export const rules = {
  required: () => ({
    name: 'required',
    validator: (value) => ({
      isValid: !isEmpty(value),
      errorText: 'This field is required'
    })
  })
};