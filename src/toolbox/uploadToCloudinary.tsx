import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";

export async function uploadToCloudinary(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "patterns_image"); // must be unsigned

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dufuwtyow/image/upload",
    { method: "POST", body: formData }
  );

  let data;
  try {
    data = await res.json();
  } catch {
    console.error("Invalid JSON from Cloudinary", await res.text());
    throw new Error(`Cloudinary upload failed, status: ${res.status}`);
  }

  if (!res.ok) {
    console.error("Cloudinary error response", data);
    throw new Error(
      `Cloudinary upload failed: ${data?.error?.message || res.statusText}`
    );
  }

  return data; // contains public_id + secure_url
}
