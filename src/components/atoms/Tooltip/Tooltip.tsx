import { Tooltip as T } from "antd";
import { TooltipPlacement, TooltipProps } from "antd/es/tooltip";
import { CSSProperties, memo, ReactNode, useMemo } from "react";

interface ITooltipProps {
  children?: ReactNode;
  title: string;
  placement?: TooltipPlacement;
}

const Tooltip = memo(
  ({
    children,
    title,
    placement = "top",
    ...props
  }: ITooltipProps & TooltipProps) => {
    const getMarginStyle = useMemo(() => {
      if (placement.includes("top")) {
        return "0 0 2px 0";
      } else if (placement.includes("left")) {
        return "0 2px 0 0";
      } else if (placement.includes("right")) {
        return "0 0 0 2px";
      } else if (placement.includes("bottom")) {
        return "2px 0 0 0";
      }
    }, [placement]);

    const tooltipStyles = useMemo(() => {
      return {
        background:
          "linear-gradient(0deg, var(--color-dark-400), var(--color-dark-600))",
        border: "0.1em solid var(--color-dark-400)",
        color: "var(--color-dark-200)",
        borderRadius: "0.2em",
        padding: "0.2em 0.5em 0.11em 0.5em",
        boxShadow: "0 0 4px 0px var(--color-dark-800)",
        minHeight: "auto",
        minWidth: "auto",
        maxWidth: "250px", // Prevents tooltip from getting too wide
        userSelect: "none",
        margin: getMarginStyle || "0",
        fontSize: "clamp(0.5rem, 0.8vw, 0.7rem)", // Responsive font size
      };
    }, [getMarginStyle]);

    return (
      <T
        title={title}
        placement={placement}
        mouseEnterDelay={0.5}
        mouseLeaveDelay={0.01}
        destroyTooltipOnHide={true}
        arrow={false}
        styles={{ body: { ...tooltipStyles } as CSSProperties }}
        {...props}
      >
        {children}
      </T>
    );
  }
);
export default Tooltip;
