import axios from "axios";
import { Address, GetAddressIOAddress } from "../interfaces/address.interface";
import settings from "../config/settings";

class AddressService {
  public async find(postcode: string): Promise<Address[]> {
    return axios
      .get(
        `https://api.getAddress.io/find/${postcode}?api-key=${settings.GETADDRESSIO_API_KEY}&expand=true`
      )
      .then(({ data }) => {

        if (data.addresses.length > 0) {
          return data.addresses.map((address: GetAddressIOAddress) => ({
            line1: address.line_1,
            line2: address.line_2,
            line3: address.line_3,
            postcode: data.postcode,
            town: address.town_or_city,
            country: address.country,
          }));
        }
        return [];
      });
  }
}

export default AddressService;
