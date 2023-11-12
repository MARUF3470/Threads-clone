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
import { PostErrorType, PostType } from "@/type";
import { MessageCircle } from "lucide-react";
import CardBar from "../common/CardBar";
import { useSession } from "next-auth/react";
import UserAvatar from "../common/UserAvatar";
import { useState } from "react";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

const AddComments = ({ post }: { post: PostType }) => {
  const router = useRouter();
  const { data } = useSession();
  const { toast } = useToast();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<PostErrorType>({});
  const submit = async () => {
    setLoading(true);
    axios
      .post("/api/comment", {
        content,
        post_id: post.id.toString(),
        toUserId: post.user_id,
      })
      .then((res) => {
        const response = res.data;
        if (response.status === 400) {
          setError(response.errors);
        } else if (response.status === 200) {
          setContent("");
          setLoading(false);
          setError({});
          router.refresh();
          toast({
            title: "Done",
            description: "Your comment is sucessfully placed",
            className: "bg-green-400",
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <MessageCircle hanging={20} width={20} className="cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add Comment</AlertDialogTitle>
          <AlertDialogDescription>
            <CardBar post={post} />
            <div>
              <p className="ml-12 -mt-2">{post?.content}</p>
            </div>
            <div className="mt-5 flex items-start">
              <UserAvatar name={data?.user?.name ?? "M"} image="" />
              <textarea
                name=""
                className="w-full h-24 resize-none bg-background outline-double rounded-lg placeholder:font-normal ml-2 p-3"
                placeholder="Type your comment"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <span className="ml-12 text-red-400">{error.content}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              setContent("");
              setError({});
              setLoading(false);
            }}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={submit}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddComments;
