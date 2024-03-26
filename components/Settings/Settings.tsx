import styles from "@/components/Settings/Settings.module.scss";
import SettingsBackground from "./SettingsBackground";
import SettingsHero from "./SettingsHero";
import SettingsInfo from "./SettingsInfo";
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { validateProfileImage } from "@/helpers/Validation/profileImageValidation";
import sendImageFile from "@/helpers/Api/sendImageFile";
import removeImage from "@/helpers/Api/removeImage";
import { Image, createCanvas } from "canvas";
import { dataURItoBlob } from "@/helpers/General";

const Settings = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [compressedFile, setCompressedFile] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { data: session, update, status } = useSession();

  const user = session?.user;

  const triggerUpload = () => {
    fileRef.current?.click();
  };

  const aboardFileUpload = (error: string) => {
    setFile(null);
    setErrorMessage(error);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const handleFileSend = async () => {
    // Get file extension
    const fileExtension = file!.type.split("/").pop();

    if (!compressedFile) return;

    const blobCompressedImage = dataURItoBlob(compressedFile);

    // Create form data and append the file
    const formData = new FormData();
    formData.append(
      "profileImage",
      blobCompressedImage!,
      `${user?.email}-${new Date().getTime()}.${fileExtension}`
    );

    // Get access token from session
    const token = session?.backendTokens.accessToken;

    // Send request to remove old image
    const imageSrc = user!.imageSrc!.split("/")[2];
    setIsLoading(true);
    await removeImage(imageSrc, token!);

    // Send request to update user image and destructure the response and error
    const { response: newImage, error } = await sendImageFile(formData, token!);
    // Exit if error
    if (error) return console.log(error);

    if (session && newImage) {
      if (status === "authenticated") {
        // Update session user data with updated values
        const newUser = { ...user, imageSrc: newImage };
        await update({ user: newUser });
      }
    }
    setIsLoading(false);
    // Reset file
    setFile(null);
  };

  useEffect(() => {
    // Store the uploaded file to clean up the event listener in future
    const currentFile = fileRef.current as HTMLInputElement | null;

    const handleFileChange = (event: Event) => {
      // Get files from the input elements
      const inputElement = event.target as HTMLInputElement;
      const files = inputElement.files as FileList | null;
      if (files && files.length > 0) {
        const uploadedFile = files[0];
        setErrorMessage("");

        // Validate file
        const { error, validFile } = validateProfileImage(uploadedFile);

        // If error, set error message
        if (error) return aboardFileUpload(error);

        // If file not found, set error message
        if (!validFile) return aboardFileUpload("File not found");

        const reader = new FileReader();

        // Compress the image
        reader.onload = async (e) => {
          const img = document.createElement("img") as unknown as Image;
          img.src = e.target?.result as string;

          img.onload = () => {
            const MAX_WIDTH = 500;
            const scaleSize = MAX_WIDTH / img.width;
            const canvas = createCanvas(MAX_WIDTH, img.height * scaleSize);
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, MAX_WIDTH, img.height * scaleSize);

            const compressedImage = canvas.toDataURL(`image/jpeg`);
            setCompressedFile(compressedImage);
          };
        };
        reader.readAsDataURL(validFile);

        // Set the file
        setFile(validFile);
      }
    };

    // Add event listener to the input element
    if (currentFile) {
      currentFile.addEventListener("change", handleFileChange);
    }

    // Clean up the event listener
    return () => {
      if (currentFile) {
        currentFile.removeEventListener("change", handleFileChange);
      }
    };
  }, [fileRef]);

  return (
    <div className={styles.container}>
      <SettingsBackground
        isLoading={isLoading}
        file={file}
        handleFileSend={handleFileSend}
        error={errorMessage}
        hideError={() => setErrorMessage("")}
      />
      <SettingsHero
        fileRef={fileRef}
        triggerUpload={triggerUpload}
        handleFileChange={handleFileChange}
      />
      <SettingsInfo />
    </div>
  );
};
export default Settings;
