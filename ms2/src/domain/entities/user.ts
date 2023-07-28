type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type PhoneNumber = {
  type: string;
  number: string;
};

type UserProperties = {
  id?: string;
  name: string;
  email: string;
  age: number;
  address: Address;
  phoneNumbers?: PhoneNumber[];
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export class User {
  #id?: string;
  #name: string;
  #email: string;
  #age: number;
  #address: Address;
  #phoneNumbers?: PhoneNumber[];
  #isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(input: UserProperties) {
    this.#id = input?.id;
    this.#name = input.name;
    this.#email = input.email;
    this.#age = input.age;
    this.#address = input.address;
    this.#phoneNumbers = input.phoneNumbers;
    this.#isActive = input.isActive;
    this.createdAt = input.createdAt;
    this.updatedAt = input.updatedAt;
  }

  get id(): string | undefined {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  get email(): string {
    return this.#email;
  }

  get age(): number {
    return this.#age;
  }

  get address(): Address {
    return this.#address;
  }

  get phoneNumbers(): PhoneNumber[] {
    return this.#phoneNumbers;
  }

  get isActive(): boolean {
    return this.#isActive;
  }

  toSave() {
    return {
      id: this.#id,
      name: this.#name,
      email: this.#email,
      age: this.#age,
      address: this.#address,
      phoneNumbers: this.#phoneNumbers,
      isActive: this.#isActive,
    };
  }
}
