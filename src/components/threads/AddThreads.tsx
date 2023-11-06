"use client";
import React, { useRef, useState } from "react";
import UserAvatar from "../common/UserAvatar";
import { ImageIcon } from "lucide-react";
import { Button } from "../ui/button";
import ImagePreviewCart from "../common/ImagePreviewCart";

const AddThreads = () => {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [image, setimage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [content, setContent] = useState<string>("");
  const handleClick = () => {
    imageRef.current?.click();
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      console.log("The image is", selectedFile);
      setimage(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
    }
  };
  const removePreviewUrl = () => {
    setimage(null);
    setPreviewUrl(undefined);
  };
  return (
    <div className="mt-5">
      <div className="mb-5">
        {previewUrl ? (
          <ImagePreviewCart imgURL={previewUrl} callback={removePreviewUrl} />
        ) : (
          <></>
        )}
      </div>
      <div className="flex justify-start items-start">
        <UserAvatar name="Maruf" image="" />
        <textarea
          className="w-full h-24 text-md p-2 bg-muted outline-none  resize-none rounded-lg placeholder:font-normal ml-2"
          placeholder="Type somthing great...."
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="ml-12 mt-2 flex justify-between items-center">
        <input
          ref={imageRef}
          onChange={handleImageChange}
          type="file"
          className="hidden"
        />
        <ImageIcon
          onClick={handleClick}
          height={20}
          width={20}
          className="cursor-pointer"
        />
        <Button disabled={content.length <= 1}>Post</Button>
      </div>
    </div>
  );
};

export default AddThreads;
