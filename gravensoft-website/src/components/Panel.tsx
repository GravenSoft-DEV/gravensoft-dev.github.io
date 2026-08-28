import type { ReactNode } from "react";

export default function Panel({ children }: {children?: ReactNode}) {
  return (
    <>
      <div className="bg-gray-400 rounded-2xl min-h-64">
        {children}
      </div>
    </>
  );
}