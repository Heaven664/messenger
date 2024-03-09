import axios from "axios";

const readMessages = async (userEmail: string, friendEmail: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/chats/read`;
  let response: any = null;

  try {
    response = (await axios.put(url, { userEmail, friendEmail })).data;
  } catch (AxiosError: any) {
    // Get error message
    const error = AxiosError.response.data.message.trim();

    return { response, error };
  }
};

export default readMessages;
