// components
import { Icon } from "./Icon";
import Slot from "./Slot";

// types
import type { ComponentProps, HTMLAttributes } from "react";
import type { IconProps } from "./Icon";

type ButtonProps = {
  rounded?: boolean;
  variant: "filled" | "outlined" | "ghost" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
} & (
  | ({
      asChild?: false;
    } & ComponentProps<"button">)
  | ({
      asChild: true;
    } & HTMLAttributes<HTMLElement>)
);

const Button = ({
  asChild,
  children,
  className,
  rounded,
  variant,
  size,
  onClick,
  ...props
}: ButtonProps) => {
  const classNames = [
    "c-button",
    `c-button--${variant}`,
    size ? `c-button--${size}` : "",
    rounded ? "c-button--rounded" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClickDisabled = (
    e: React.MouseEvent<HTMLElement | MouseEvent>,
  ): void => {
    if (props["aria-disabled"] === "true") {
      e.stopPropagation();
      e.preventDefault();
    }

    return;
  };

  if (asChild)
    return (
      <Slot
        className={classNames}
        onClick={props["aria-disabled"] ? handleClickDisabled : onClick}
        {...props}
      >
        {children}
      </Slot>
    );

  return (
    <button
      className={classNames}
      onClick={props["aria-disabled"] ? handleClickDisabled : onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const ButtonIcon = ({ className, ...props }: IconProps) => {
  const classNames = ["c-button__icon", className].filter(Boolean).join(" ");

  return <Icon className={classNames} {...props} />;
};

const ButtonLabel = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  const classNames = ["c-button__label", className].filter(Boolean).join(" ");

  return <span className={classNames} {...props} />;
};

Button.Label = ButtonLabel;
Button.Icon = ButtonIcon;

// IconButton
const IconButton = ({
  asChild,
  children,
  className,
  rounded,
  size,
  variant,
  onClick,
  ...props
}: ButtonProps) => {
  const classNames = [
    "c-icon-button",
    `c-icon-button--${variant}`,
    size && `c-icon-button--${size}`,
    rounded && "u--rounded",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const handleClickDisabled = (
    e: React.MouseEvent<HTMLElement | MouseEvent>,
  ): void => {
    if (props["aria-disabled"] === "true") {
      e.stopPropagation();
      e.preventDefault();
    }

    return;
  };

  if (asChild)
    return (
      <Slot
        className={classNames}
        onClick={props["aria-disabled"] ? handleClickDisabled : onClick}
        {...props}
      >
        {children}
      </Slot>
    );

  return (
    <button
      className={classNames}
      onClick={props["aria-disabled"] ? handleClickDisabled : onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const IconButtonIcon = ({ className, ...props }: IconProps) => {
  const classNames = ["c-icon-button__icon", className].filter(Boolean).join(" ");

  return <Icon className={classNames} {...props} />;
};

const IconButtonLabel = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  const classNames = ["c-icon-button__label", className].filter(Boolean).join(" ");

  return <span className={classNames} {...props} />;
};

IconButton.Icon = IconButtonIcon;
IconButton.Label = IconButtonLabel

export { Button, ButtonLabel, ButtonIcon, IconButton, IconButtonIcon, IconButtonLabel };
