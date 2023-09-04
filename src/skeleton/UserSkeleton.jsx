import { Skeleton } from "@/components/ui/skeleton";

export const UserSkeleton = () => {
  return (
    <div className="flex gap-4 mt-4">
      <div className="shrink-0">
        <Skeleton className="h=[100px] w-[100px]" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex item-center justify-center gap-4 max-[300px]:flex-col">
          <div className="text-[1.3rem] flex gap-2">
            <Skeleton className="w-[100px] h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
