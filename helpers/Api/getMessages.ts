import axios from "axios";

const getMessages = async (userEmail: string, friendEmail: string) => {
  const url = `${process.env
    .NEXT_PUBLIC_API_URL!}/messages?user=${userEmail}&friend=${friendEmail}`;
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

export default getMessages;
