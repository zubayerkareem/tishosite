import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-xs uppercase tracking-[0.2em] text-accent font-medium",
        className
      )}
    >
      {children}
    </p>
  );
}
