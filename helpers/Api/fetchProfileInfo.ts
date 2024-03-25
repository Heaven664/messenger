import { User } from "@/types/User";
import axios from "axios";

/**
 * Fetches user profile information
 * @param profileId user id
 * @returns server response and error
 */
export const fetchProfileInfo = async (profileId: string) => {
  let response: any = null;
  let error: string | null = null;
  try {
    response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${profileId}`
    );
  } catch (AxiosError: any) {
    error = AxiosError.response.data.message.trim();
  } finally {
    return { response, error };
  }
};
