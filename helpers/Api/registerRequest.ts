import { RegisterRequest } from "@/types/Api";
import axios from "axios";

const registerRequest = async (data: RegisterRequest) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/auth/register`;
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default registerRequest;
