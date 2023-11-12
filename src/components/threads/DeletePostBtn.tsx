"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

const DeletePostBtn = ({ id }: { id: number }) => {
  const { toast } = useToast();
  const router = useRouter();
  const handleDelete = (id: number) => {
    axios
      .delete(`/api/post/${id}`)
      .then((res) => {
        const response = res.data;
        if (response.status === 200) {
          router.refresh();
          toast({
            title: "Deleted",
            description: response.message,
            className: "bg-green-500",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Trash2
          className="text-red-400 cursor-pointer"
          width={22}
          height={22}
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your post
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeletePostBtn;
