import { Skeleton } from "@/components/ui/skeleton";

export const PostSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 shrink-0 w-[600px] min-w-full">
      <div className="flex items-center">
        <Skeleton className="h-[40px] w-[40px] bg-[#333] rounded-full mr-4" />
        <div className="flex flex-col gap-2 flex-grow">
          <Skeleton className="h-[1rem] w-[50%] bg-[#333]" />
          <Skeleton className="h-[10px] w-[30%] bg-[#333]" />
        </div>
      </div>
      <Skeleton className="h-[1.2rem] w-[50%] bg-[#333]" />
      <Skeleton className="h-[400px] w-[100%] bg-[#333]" />
    </div>
  );
};
