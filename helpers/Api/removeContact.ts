import { removeContactRequest } from "@/types/Api";
import axios from "axios";

const removeContact = async (data: removeContactRequest, token: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/contacts/unfriend`;
  let error: string | null = null;
  let response: any = null;

  try {
    response = (
      await axios.delete(url, {
        data,
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data;
  } catch (AxiosError: any) {
    // Get error message
    error = AxiosError.response.data.message.trim();
  } finally {
    return { response, error };
  }
};

export default removeContact;
