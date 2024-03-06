import { addContactRequest } from "@/types/Api";
import axios from "axios";

const addContact = async (data: addContactRequest) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/contacts/add`;
  let error: string | null = null;
  let response: any = null;

  try {
    response = (await axios.post(url, data)).data;
  } catch (AxiosError: any) {
    // Get error message
    const error = AxiosError.response.data.message.trim();
    console.log(error);
  } finally {
    return { response, error };
  }
};

export default addContact;
