interface IAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface IPhoneNumber {
  type: string;
  number: string;
}

export interface IUser {
  name: string;
  email: string;
  age: number;
  address: IAddress;
  phoneNumbers?: IPhoneNumber[];
  isActive: boolean;
}

export interface IUserPayload {
  data: IUser;
}
