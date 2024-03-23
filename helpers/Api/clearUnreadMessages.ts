import axios from "axios";

const clearUnreadMessages = async (
  userEmail: string,
  friendEmail: string,
  token: string
) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/chats/read`;
  let response: any = null;

  try {
    response = (
      await axios.put(
        url,
        { userEmail, friendEmail },
        { headers: { Authorization: `Bearer ${token}` } }
      )
    ).data;
  } catch (AxiosError: any) {
    // Get error message
    const error = AxiosError.response.data.message.trim();

    return { response, error };
  }
};

export default clearUnreadMessages;
