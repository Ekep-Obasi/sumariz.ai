"use client";

import { convertImageToText } from "@/utils/image-to-text";
import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { useFormContext } from "react-hook-form";
import { Icons } from "./icons";
import IconButton from "./icon-button";

const ImagePicker = () => {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const { setValue } = useFormContext();
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    if (e.target.files) {
      const url = URL.createObjectURL(e.target.files[0]);
      try {
        const text = await convertImageToText(url);
        setValue("prompt", text);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const handleClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  return (
    <>
      <input
        type="file"
        ref={imageRef}
        onChange={handleImageUpload}
        style={{ display: "none" }}
        disabled={loading}
      />
      <IconButton
        variant="ghost"
        text={!loading ? "Upload" : "Uploading..."}
        onClick={handleClick}
      >
        <Icons.upload />
      </IconButton>
    </>
  );
};

export default ImagePicker;
