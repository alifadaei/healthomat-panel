import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  selector: string;
  children: React.ReactElement;
}

const Tooltip = ({ selector, children }: TooltipProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, [selector]);
  return isMounted
    ? createPortal(children, document.querySelector(selector) as Element)
    : null;
};

export default Tooltip;
