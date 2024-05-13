import { twMerge } from "tailwind-merge";
export const CardSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge("border rounded-xl p-4", className)}>
      <div className="animate-pulse flex space-x-4 w-full">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 w-full">
          <div className="h-6 bg-slate-200 rounded"></div>
          <div className="h-6 bg-slate-200 rounded sm:col-span-2"></div>
          <div className="h-6 bg-slate-200 rounded"></div>
          <div className="h-6 bg-slate-200 rounded sm:col-span-2"></div>
          <div className="h-6 bg-slate-200 rounded"></div>
          <div className="h-6 bg-slate-200 rounded sm:col-span-2"></div>
          <div className="h-6 bg-slate-200 rounded"></div>
          <div className="h-6 bg-slate-200 rounded sm:col-span-2"></div>
          <div className="h-6 bg-slate-200 rounded"></div>
          <div className="h-6 bg-slate-200 rounded sm:col-span-2"></div>
        </div>
      </div>
    </div>
  );
};
