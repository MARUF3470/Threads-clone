"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const DynamicBar = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-4">
      <ArrowLeft width={30} height={30} onClick={() => router.back()} />
      <h4 className="text-xl font-semibold">{title}</h4>
    </div>
  );
};

export default DynamicBar;
