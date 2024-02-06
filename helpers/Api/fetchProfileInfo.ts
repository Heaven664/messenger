import { User } from "@/types/User";
import axios from "axios";

/**
 * Fetches user profile information
 * @param profileId user id
 * @returns server response
 */
export const fetchProfileInfo = async (profileId: string): Promise<User> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${profileId}`
  );
  return response.data;
};
