"use client";
import { X } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const ImagePreviewCart = ({
  imgURL,
  callback,
}: {
  imgURL: string;
  callback: () => void;
}) => {
  return (
    <div
      className="w-full h-72 bg-cover"
      style={{
        backgroundImage: `url(${imgURL})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-right mr-2">
        <Button size="icon" className="mt-2" onClick={callback}>
          <X />
        </Button>
      </div>
    </div>
  );
};

export default ImagePreviewCart;
