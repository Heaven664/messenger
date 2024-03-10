/**
 * Validates if provided file does not exceed the maximum file size and is an allowed image
 * @param file Uploaded file
 * @returns Object with error message and valid file
 */

export const validateProfileImage = (file: File | null) => {
  let error: string | null = null;
  let validFile: File | null = null;

  // If not file, return
  if (!file) {
    error = "Invalid File";
    return { error, validFile };
  }

  // Get file extension
  const fileExtension = file.type.split("/").pop();

  if (!fileExtension) {
    error = "Invalid File";
    return { error, validFile };
  }

  const allowedExtensions = ["jpeg", "png", "webp"];

  // If file extension is not allowed
  if (!allowedExtensions.includes(fileExtension as string)) {
    error = "Invalid File";
    return { error, validFile };
  }

  // Define max file size 3 MB
  const maxFileSize = 1024 * 1024 * 3; // 3MB

  // If file is to large
  if (file.size > maxFileSize) {
    error = "Large file";
    return { error, validFile };
  }

  // If file is not image
  if (!file.type.startsWith("image")) {
    error = "Invalid File";
    return { error, validFile };
  }

  // If all checks pass, return the file
  validFile = file;

  return { error, validFile };
};
