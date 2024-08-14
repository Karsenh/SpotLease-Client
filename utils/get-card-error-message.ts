import {CardFieldInput} from '@stripe/stripe-react-native';

type TGetCardErrorMessage = (args: {
  complete?: boolean;
  validCVC?: CardFieldInput.ValidationState;
  validExpiryDate?: CardFieldInput.ValidationState;
  validNumber?: CardFieldInput.ValidationState;
}) => string | void;

export const getCardErrorMessage: TGetCardErrorMessage = ({
  complete,
  validCVC,
  validExpiryDate,
  validNumber,
}) => {
  if (!complete) {
    return "Field isn't full, or not correct!";
  }
  if (validCVC !== CardFieldInput.ValidationState.Valid) {
    return 'Invalid CVC!';
  }
  if (validExpiryDate !== CardFieldInput.ValidationState.Valid) {
    return 'Invalid expiration date!';
  }
  if (validNumber !== CardFieldInput.ValidationState.Valid) {
    return 'Invalid card number!';
  }

  return;
};
