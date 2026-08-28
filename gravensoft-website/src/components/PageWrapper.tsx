import { type ReactNode } from "react";

export default function PageWrapper({ children }: { children?: ReactNode }) {
  return (
    <div className="relative z-0 flex flex-col w-full items-center md:max-w-8xl mx-auto bg-gray-900">
      <div className="flex flex-col w-full bg-gray-500">
        {children}
      </div>
    </div>
  );
}