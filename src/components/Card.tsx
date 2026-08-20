// types
import type { HTMLAttributes } from "react";

const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const classNames: string = ["c-card", className].filter(Boolean).join(" ");

  return <div className={classNames} {...props} />;
};

const CardContent = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => {
  const classNames: string = ["c-card-content", className].filter(Boolean).join(" ");

  return <div className={classNames} {...props} />
}

Card.Content = CardContent

export { Card, CardContent };
