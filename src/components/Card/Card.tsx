import { ReactNode } from "react";
import "./Card.scss";

interface CardProps {
  title: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="Card">
      <h2 className="Card__title">{title}</h2>
      {children}
    </div>
  );
}
