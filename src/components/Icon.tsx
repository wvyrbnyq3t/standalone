import type { HTMLAttributes } from "react";

type IconProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

const Icon = ({ className, rounded, size, ...props }: IconProps) => {
  const classNames = ["c-icon", size && `c-icon--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return <span className={classNames} {...props} />;
};

export type { IconProps };
export { Icon };
