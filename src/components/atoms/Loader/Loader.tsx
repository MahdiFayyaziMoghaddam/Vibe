import React from "react";

interface LoaderProps {
  className?: string;
}
export default function Loader({ className = "" }: LoaderProps) {
  return (
    <div className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="27 27 46 46"
        className={`w-6 h-6 text-primary ${className}`}
      >
        <path
          fill="currentColor"
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}
