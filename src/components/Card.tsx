import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return <div className="border rounded-xl p-4">{children}</div>;
};
