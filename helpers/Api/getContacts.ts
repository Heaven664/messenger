// import { getContactsRequest } from "@/types/Api";
import axios from "axios";

const getContacts = async (email: string) => {
  const url = `${process.env
    .NEXT_PUBLIC_API_URL!}/contacts/friends?email=${email}`;
  let error: string | null = null;
  let response: any = null;

  try {
    response = (await axios.get(url)).data;
  } catch (AxiosError: any) {
    // Get error message
    const error = AxiosError.response.data.message.trim();
    console.log(error);
  } finally {
    return { response, error };
  }
};

export default getContacts;
