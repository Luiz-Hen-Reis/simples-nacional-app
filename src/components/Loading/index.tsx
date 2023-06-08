import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-[73vh] flex items-center justify-center">
      <Loader2 className="animate-spin" size={100} />
    </div>
  );
}
