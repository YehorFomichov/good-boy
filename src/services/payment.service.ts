import axios from "axios";
import { IPostShelterDonate } from "../types/donateForm";

const apiEndPoint =
  "https://frontend-assignment-api.goodrequest.dev/api/v1/shelters";

const shelterService = {
  sendForm: async (payload: IPostShelterDonate) => {
    const url = apiEndPoint + "/contribute";
    const { data } = await axios.post(url, payload);
    return data;
  },
  getShelters: async () => {
    const { data } = await axios.get(apiEndPoint);
    return data;
  },
};

export default shelterService;
