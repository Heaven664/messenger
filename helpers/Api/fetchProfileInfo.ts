import axios from "axios";

export const fetchProfileInfo = async (profileId: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${profileId}`
  );
  return response.data;
};
