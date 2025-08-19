import React from "react";
import { Meteors } from "./meteors";

export function MeteorsDemo() {
  return (
    <div className="w-full relative max-w-xs">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-primary/20 to-primary/10 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-card border border-border px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-primary/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h1 className="font-bold text-xl text-foreground mb-4 relative z-50">
          Meteors because they&apos;re cool
        </h1>

        <p className="font-normal text-base text-muted-foreground mb-4 relative z-50">
          I don&apos;t know what to write so I&apos;ll just paste something
          cool here. One more sentence because lorem ipsum is just
          unacceptable. Won&apos;t ChatGPT the shit out of this.
        </p>

        <button className="border px-4 py-1 rounded-lg border-primary/50 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300">
          Explore
        </button>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
}
