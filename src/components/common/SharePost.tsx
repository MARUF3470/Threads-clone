"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import { Copy, SendHorizonal, TwitterIcon } from "lucide-react";
import { useToast } from "../ui/use-toast";

const SharePost = ({ url }: { url: string }) => {
  const { toast } = useToast();
  const copyUrl = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Copied",
      description: "Post link copied successfully",
      className: "bg-green-500",
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <SendHorizonal hanging={20} width={20} className="cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Share Post</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex rounded-md border justify-between p-5 mt-5">
              <strong>{url}</strong>
              <Copy
                onClick={copyUrl}
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
            <div className="mt-5 flex gap-3">
              <FacebookShareButton
                url={url}
                quote={"Thread app post url."}
                hashtag={"#nextshare"}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <LineShareButton
                url={"https://github.com/next-share"}
                title={"Thread app post url."}
              >
                <LineIcon size={30} />
              </LineShareButton>
              <TwitterShareButton url={url} title={"Thread app post url."}>
                <TwitterIcon size={32} />
              </TwitterShareButton>
              <WhatsappShareButton
                url={url}
                title={"Thread app post url."}
                separator=":: "
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SharePost;
