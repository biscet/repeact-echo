import { useUnit } from 'effector-solid';
import { isEmpty } from './lodash';

export const useForm = (currentForm, labelsForSignals) => {
  const form = useUnit(currentForm);
  const values = useUnit(currentForm.$values);
  let signalValues = {};

  if (!isEmpty(labelsForSignals)) {
    labelsForSignals.forEach((label) => {
      signalValues = { ...signalValues, [label]: useUnit(currentForm.fields[label]) };
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    form.submit();
  };

  return ({
    ...form,
    fields: currentForm.fields,
    sumbit: submitHandler,
    values,
    signalValues
  });
};

// const { sumbit, signalValues } = useForm(playerNameForm, [PROFILE_NAME_FIELD]);

// <form onSubmit={sumbit}>
//  <input
//    type="text"
//    style={{ border: '1px solid black' }}
//    value={signalValues[PROFILE_NAME_FIELD].value()}
//    onInput={(e) => {
//      signalValues[PROFILE_NAME_FIELD].onChange(e.target.value);
//    }}
//  />
//  <button type="submit">submit</button>
// </form> */
