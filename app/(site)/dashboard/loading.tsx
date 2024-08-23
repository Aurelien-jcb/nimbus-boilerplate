import { Icons } from "@/components/ui/icons";

export default function Loading() {
  return (
    <div className="mx-auto flex h-[85vh] max-w-sm flex-col items-center justify-center space-y-6">
      <Icons.loader className="mr-2 size-5 animate-spin" />
    </div>
  );
}
