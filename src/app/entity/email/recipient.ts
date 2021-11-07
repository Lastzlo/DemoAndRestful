import {RecipientType} from './recipientType';

export interface Recipient {
  mailAddress: string;
  recipientType: RecipientType;
}
