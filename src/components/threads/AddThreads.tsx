"use client";
import React, { useRef, useState } from "react";
import UserAvatar from "../common/UserAvatar";
import { ImageIcon } from "lucide-react";
import { Button } from "../ui/button";
import ImagePreviewCart from "../common/ImagePreviewCart";
import { PostErrorType } from "@/type";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import PostCard from "../common/PostCard";

const AddThreads = () => {
  const { toast } = useToast();
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [image, setimage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<PostErrorType>({});
  const handleClick = () => {
    imageRef.current?.click();
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setimage(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
    }
  };
  const removePreviewUrl = () => {
    setimage(null);
    setPreviewUrl(undefined);
  };
  const submit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("content", content);
    if (image) formData.append("image", image);
    axios
      .post("/api/post", formData)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        if (response.status === 400) {
          setErrors(response.error);
        } else if (response.status === 200) {
          router.refresh();
          setErrors({});
          setContent("");
          setimage(null);
          setPreviewUrl(undefined);
          toast({
            title: "Post Uploaded",
            description: response.message,
            className: "bg-green-400",
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("there is some error", err);
      });
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
          value={content}
          className="w-full h-24 text-md p-2 bg-muted outline-none  resize-none rounded-lg placeholder:font-normal ml-2"
          placeholder="Type somthing great...."
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <span className="text-red-400 ml-12">{errors.content}</span>
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
        <Button onClick={submit} disabled={content?.length <= 3 || loading}>
          Post
        </Button>
      </div>
    </div>
  );
};

export default AddThreads;
