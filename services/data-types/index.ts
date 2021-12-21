export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BanksTypes {
  _id: string;
  bankName: string;
  name: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[];
}

export interface NominalsTypes {
  _id: string;
  coinQuantity: number;
  price: number;
  coinName: string;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface SignupTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id : string;
  username : string;
  email : string;
  name : string;
  avatar : string;
}

export interface JWTPayloadTypes {
  player : UserTypes;
  iat: number;
}
