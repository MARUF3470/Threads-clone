import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const ImageViewer = ({ img }: { img: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={`/uploads/${img}`}
          width={500}
          height={500}
          className="w-full h-52 object-cover cursor-pointer rounded-2xl my-2"
          alt=""
        />
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            <Image
              src={`/uploads/${img}`}
              width={500}
              height={500}
              unoptimized
              className="w-full h-80 object-contain cursor-pointer rounded-2xl my-2"
              alt=""
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ImageViewer;
