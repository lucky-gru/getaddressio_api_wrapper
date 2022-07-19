export interface Address {
  line1: string;
  line2: string;
  line3: string;
  postcode: string;
  town: string;
  country: string;
}

export interface GetAddressIOAddress {
  line_1: string;
  line_2: string;
  line_3: string;
  town_or_city: string;
  country: string;
}