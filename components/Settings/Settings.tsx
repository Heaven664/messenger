import styles from "@/components/Settings/Settings.module.scss";
import SettingsBackground from "./SettingsBackground";
import SettingsHero from "./SettingsHero";
import SettingsInfo from "./SettingsInfo";
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { validateProfileImage } from "@/helpers/Validation/profileImageValidation";
import sendImageFile from "@/helpers/Api/sendImageFile";

const Settings = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const { data: session, update, status } = useSession();

  const user = session?.user;

  const triggerUpload = () => {
    fileRef.current?.click();
  };

  const aboardFileUpload = (error: string) => {
    setFile(null);
    setErrorMessage(error);
  };

  const handleFileSend = async () => {
    // Get file extension
    const fileExtension = file!.type.split("/").pop();

    // Create form data and append the file
    const formData = new FormData();
    formData.append(
      "profileImage",
      file!,
      `${user?.email}-profile-image.${fileExtension}`
    );

    // Get access token from session
    const token = session?.backendTokens.accessToken;

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
        file={file}
        handleFileSend={handleFileSend}
        error={errorMessage}
        hideError={() => setErrorMessage("")}
      />
      <SettingsHero fileRef={fileRef} triggerUpload={triggerUpload} />
      <SettingsInfo />
    </div>
  );
};
export default Settings;
