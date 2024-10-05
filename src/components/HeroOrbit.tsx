import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit: boolean;
  orbitDuration?: string;
  shouldSpin: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={shouldOrbit ? true && "animate-spin" : ""}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={shouldSpin ? true && "animate-spin" : ""}
            style={{ animationDuration: spinDuration }}
          >
            <div
              className="inline-flex"
              style={{ transform: `rotate(${rotation * -1}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
