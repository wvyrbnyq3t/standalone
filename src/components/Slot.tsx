import { Children, cloneElement, isValidElement } from "react";

import type { HTMLAttributes, ReactElement, ReactNode } from "react";

type SlotProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

const Slot = ({ children, ...slotProps }: SlotProps) => {
  if (!isValidElement(children)) {
    if (Children.count(children) > 1) {
      throw new Error("Slot component can only accept a single child element.");
    }

    return null;
  }

  const child = children as ReactElement<HTMLAttributes<HTMLElement>>;

  const {
    className: slotClassName,
    style: slotStyle,
    onClick: slotOnClick,
    ...otherSlotProps
  } = slotProps;

  const {
    className: childClassName,
    style: childStyle,
    onClick: childOnClick,
    ...otherChildProps
  } = child.props;

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    childOnClick?.(event);

    if (event.defaultPrevented) return;

    slotOnClick?.(event);
  };

  return cloneElement(child, {
    ...otherSlotProps,
    ...otherChildProps,

    className: [slotClassName, childClassName].filter(Boolean).join(" "),

    style: {
      ...slotStyle,
      ...childStyle,
    },

    onClick: childOnClick || slotOnClick ? handleClick : undefined,
  });
};

export default Slot;
