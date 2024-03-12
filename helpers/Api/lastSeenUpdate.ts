import { LastSeenUpdateRequest } from "@/types/Api";
import axios from "axios";

const lastSeenUpdateRequest = async (data: LastSeenUpdateRequest) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/users/last-seen`;
  let response: any = null;

  try {
    response = (
      await axios.put(url, data, {
        headers: { Authorization: `Bearer ${data.token}` },
      })
    ).data;
  } catch (AxiosError: any) {
    // Get error message
    const errorMessage = AxiosError.response.data.message.trim();
    console.log(errorMessage);
  } finally {
    return { response };
  }
};

export default lastSeenUpdateRequest;
