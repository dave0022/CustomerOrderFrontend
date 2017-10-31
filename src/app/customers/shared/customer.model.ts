import {Address} from '../../addresses/shared/address.mode';

export class Customer {
  firstName: string;
  lastName: string;
  id?: number;
  addresses: Address[];
}
