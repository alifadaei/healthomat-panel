import { createPortal } from "react-dom";

interface TooltipProps {
  selector: string;
  children: React.ReactElement;
}

const Tooltip = ({ selector, children }: TooltipProps) => {
  return createPortal(children, document.querySelector(selector) as Element);
};

export default Tooltip;
