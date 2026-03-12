import React from "react";
import { cn } from "@/lib/utils";
const Zikir = ({ id, name, count, isActive, onToggle, syncLable }) => {
  return (
    <div
      onClick={() => onToggle(id)}
      className={cn(
        "flex flex-col p-4 mb-2 rounded-4xl cursor-pointer transition-all border-2 ", // Changed to flex-col
        isActive
          ? "border-green-300 bg-primary/10 shadow-md"
          : "border-transparent bg-secondary/50 opacity-60 hover:opacity-100",
      )}
    >
      {/* Top Row: Count and Name */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-mono font-bold w-12 h-12 rounded-full border-2 flex items-center justify-center">
            {count}
          </h3>

          <span
            className={cn(
              "font-semibold transition-colors",
              isActive ? "text-primary" : "text-muted-foreground",
            )}
          >
            {name}
          </span>
        </div>
      </div>

      {/* Bottom Row: Syncing Message */}
      {isActive && (
        <div className="mt-1 ">
          {" "}
          {/* Aligns it under the name, past the count circle */}
          <p className="text-[9px] uppercase tracking-widest text-primary/70 animate-pulse">
            ● {syncLable}
          </p>
        </div>
      )}
    </div>
  );
};

export default Zikir;
