import { LoginRequest } from "@/types/Api";
import axios from "axios";

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
