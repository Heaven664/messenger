import { InfoUpdateRequest } from "@/types/Api";
import axios from "axios";

const infoUpdateRequest = async (data: InfoUpdateRequest) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/users/info`;
  let error: string | null = null;
  let response: any = null;

  try {
    response = (await axios.put(url, data)).data;
  } catch (AxiosError: any) {
    // Get error message
    const errorMessage = AxiosError.response.data.message.trim();

    // Handle error messages
    switch (errorMessage) {
      case "Missing required fields":
        error = "Missing required fields";
        break;
      case "Invalid email or password":
        error = "Invalid email or password";
        break;
      default:
        error = "Something went wrong";
    }
  } finally {
    return { response, error };
  }
};

export default infoUpdateRequest;
