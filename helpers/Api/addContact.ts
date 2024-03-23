import { addContactRequest } from "@/types/Api";
import axios from "axios";

const addContact = async (data: addContactRequest, token: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/contacts/add`;
  let error: string | null = null;
  let response: any = null;

  try {
<<<<<<< HEAD
    response = (
      await axios.post(url, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data;
    console.log(response);
=======
    response = (await axios.post(url, data)).data;
>>>>>>> main
  } catch (AxiosError: any) {
    // Get error message
    error = AxiosError.response.data.message.trim();
    console.log(AxiosError);
  } finally {
    if (!response && !error) {
      error = "Something went wrong";
    }
    return { response, error };
  }
};

export default addContact;
