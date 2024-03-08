
import { MessageType } from "@/types/ChatWindow/types";
import axios from "axios";

const sendMessage = async (data: MessageType) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/messages/`;
  let error: string | null = null;
  let response: any = null;

  try {
    response = (await axios.post(url, data)).data;
  } catch (AxiosError: any) {
    // Get error message
    error = AxiosError.response.data.message.trim();
  } finally {
    return { response, error };
  }
};

export default sendMessage;
