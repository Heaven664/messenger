import styles from "@/components/Settings/Settings.module.scss";
import SettingsBackground from "./SettingsBackground";
import SettingsHero from "./SettingsHero";
import SettingsInfo from "./SettingsInfo";
import { useEffect, useRef, useState } from "react";

const Settings = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const triggerUpload = () => {
    fileRef.current?.click();
  };

  const handleFileSend = () => {
    console.log("Uploaded file:", file);
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
        setFile(uploadedFile);
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
      <SettingsBackground file={file} handleFileSend={handleFileSend} />
      <SettingsHero fileRef={fileRef} triggerUpload={triggerUpload} />
      <SettingsInfo />
    </div>
  );
};
export default Settings;
