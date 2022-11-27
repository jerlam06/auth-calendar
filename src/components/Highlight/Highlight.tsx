import { ReactNode } from "react";
import "./Highlight.scss";

export default function Highlight({ children }: { children: ReactNode }) {
  return <div className="Highlight">{children}</div>;
}
