import { RegisterRequest } from "@/types/Api";
import axios from "axios";

/**
 * Sends register request to server
 * @param data user registration data
 * @returns and object with either user data or error message
 */
const registerRequest = async (data: RegisterRequest) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/auth/register`;
  let error: string | null = null;
  let response: any = null;

  try {
    response = (await axios.post(url, data)).data;
  } catch (AxiosError: any) {
    // Get error message
    const errorMessage = AxiosError.response.data.message.trim();

    // Handle error messages
    switch (errorMessage) {
      case "Missing required fields":
        error = "Missing required fields";
        break;
      case "User already exists":
        error = "User already exists";
        break;
      case "Invalid email":
        error = "Invalid email";
        break;
      case "Password must be at least 6 symbols long":
        error = "Password must be at least 6 symbols long";
        break;
      default:
        error = "Something went wrong";
    }
  } finally {
    if (!response && !error) {
      error = "Something went wrong";
    }
    return { response, error };
  }
};

export default registerRequest;
