import {VerificationMethod} from '@/constants';

export const getVerificationMethod = (
  username: string,
): Exclude<VerificationMethod, VerificationMethod.PROVIDER> => {
  return username.startsWith('+')
    ? VerificationMethod.PHONE
    : VerificationMethod.EMAIL;
};
