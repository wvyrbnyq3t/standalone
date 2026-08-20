import type { HTMLAttributes, CSSProperties } from "react";

type ContainerProps = {
  pdng?: "xs" | "sm" | "md" | "lg" | "xl";
  pdngInline?: "xs" | "sm" | "md" | "lg" | "xl";
  pdngBlock?: "xs" | "sm" | "md" | "lg" | "xl";
} & HTMLAttributes<HTMLDivElement>;

const Container = ({
  className,
  pdng,
  pdngInline,
  pdngBlock,
  ...props
}: ContainerProps) => {
  const classNames = [
    "l-container",
    pdng && `u-pdng--${pdng}`,
    pdngInline && `u-pdng-inline--${pdngInline}`,
    pdngBlock && `u-pdng-block--${pdngBlock}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames} {...props} />;
};

type FlexContainerProps = {
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
} & HTMLAttributes<HTMLDivElement>;

const FlexContainer = ({align, justify, className, gap, ...props }: FlexContainerProps) => {
  const classNames = [
    "l-flex-container",
    gap && `u-gap--${gap}`,
    align && `u-align--${align}`,
    justify && `u-justify--${justify}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames} {...props} />;
};

type GridContainerProps = {
  columns: number;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  rows?: number;
} & HTMLAttributes<HTMLDivElement>;

const GridContainer = ({
  columns,
  gap,
  rows,
  className,
  style,
  ...props
}: GridContainerProps) => {
  const convertSizeToPixels = (size: GridContainerProps["gap"]): string => {
    if (size && !["xs", "sm", "md", "lg", "xl"].includes(size)) {
      return size;
    }
    switch (size) {
      case "xs":
        return "4px";
      case "sm":
        return "8px";
      case "md":
        return "16px";
      case "lg":
        return "24px";
      case "xl":
        return "32px";
      default:
        return "0px";
    }
  };

  const classNames = ["l-grid-container", className].filter(Boolean).join(" ");
  const gridStyle = {
    "--grid-columns": columns,
    "--gap": gap ? convertSizeToPixels(gap) : undefined,
    "--grid-rows": rows ? `${rows}` : undefined,
    ...style,
  } as CSSProperties;

  return <div className={classNames} style={gridStyle} {...props} />;
};

type StackProps = {
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
} & HTMLAttributes<HTMLDivElement>;

const Stack = ({ gap, className, style, ...props }: StackProps) => {
  const classNames = ["l-stack", gap && `u-gap--${gap}`, className]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames} style={style} {...props} />;
};

export { Container, FlexContainer, GridContainer, Stack };
