import { addError, removeError } from './error';
import API from '../../services/api';
import { setFormSubmitStatus } from './notification';

export const configureSendMessageFormSubmit = data => {
  return async dispatch => {
    try {
      const addLocationStatus = await API.call('post', `sendMessage`, data);
      console.log(addLocationStatus);
      if (addLocationStatus.status == 201) {
        dispatch(
          setFormSubmitStatus('Message sent sucessfully !', true, 'success'),
        );
      } else {
        dispatch(
          setFormSubmitStatus(
            'Message not sent. Please try again !',
            true,
            'error',
          ),
        );
      }

      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};
