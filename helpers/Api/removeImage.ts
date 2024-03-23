import axios from "axios";

const sendImageFile = async (oldImagePath: string, token: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/images/${oldImagePath}`;
  let response: any = null;
  let error: any = null;

  try {
    response = (
      await axios.delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data;
  } catch (AxiosError: any) {
    // Get error message
    error = AxiosError.response.data.message.trim();
  } finally {
    return { response, error };
  }
};

export default sendImageFile;
