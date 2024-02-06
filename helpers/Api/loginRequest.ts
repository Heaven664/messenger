import { LoginRequest } from "@/types/Api";
import { User } from "@/types/User";
import axios from "axios";

/**
 * Sends login request to server
 * @param data login user data
 * @returns and object with either user data or error message
 */
const loginRequest = async (data: LoginRequest) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/auth/login`;
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

export default loginRequest;
