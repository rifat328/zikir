import React from "react";
import { cn } from "@/lib/utils";
const Zikir = ({ name, count, isActive, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(name)}
      className={cn(
        "flex items-center justify-between p-4 mb-2 rounded-xl cursor-pointer transition-all border-2",
        isActive
          ? "border-primary bg-primary/10 shadow-md"
          : "border-transparent bg-secondary/50 opacity-60 hover:opacity-100",
      )}
    >
      <div className="flex flex-col">
        <span
          className={cn(
            "font-semibold transition-colors",
            isActive ? "text-primary" : "text-muted-foreground",
          )}
        >
          {name}
        </span>
        {isActive && (
          <span className="text-xs text-primary/70 animate-pulse">
            Currently Syncing...
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-2xl font-mono font-bold tracking-tighter">
          {count}
        </span>
        {/* Visual indicator for active state */}
        <div
          className={cn(
            "w-3 h-3 rounded-full",
            isActive
              ? "bg-primary shadow-[0_0_8px_rgba(var(--primary),0.6)]"
              : "bg-muted",
          )}
        />
      </div>
    </div>
  );
};

export default Zikir;
