import { useEffect } from "react";
import { useRef, useState } from "react";
import Icon, { IconList } from "../Icon/Icon";

interface AccordionProps {
  children: React.ReactNode;
  titleName: string;
  className?: string;
  titleLabelClasses?: string;
  defaultOpen?: boolean;
  connectLine?: boolean;
  showNumber?: number;
}

const Accordion = ({
  defaultOpen,
  children,
  titleName,
  className,
  titleLabelClasses,
  connectLine,
  showNumber,
}: AccordionProps) => {
  const [openAccordion, setOpenAccordion] = useState(
    typeof defaultOpen !== "undefined" ? defaultOpen : false
  );

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    setContentHeight(contentRef.current!.scrollHeight);
  }, [contentRef.current]);

  const handleToggleAccordion = () => {
    setOpenAccordion((state) => !state);
  };

  return (
    <div className={`${className} w-full`}>
      {/* ============ accordion top title and chevron icon ============= */}
      <div
        className="flex justify-between py-1 cursor-pointer items-center select-none"
        onClick={handleToggleAccordion}
      >
        <div className={`font-dana ${titleLabelClasses}`}>{titleName}</div>
        {connectLine && (
          <div className=" mx-4 h-[.5px] grow bg-primary-100"></div>
        )}
        <div
          className="flex items-center px-1 rounded gap-1"
          style={{ border: showNumber ? "solid #cbd5e1 2px" : " " }}
        >
          {showNumber && (
            <span className="text-xs text-gray-600 ms-1">{showNumber}</span>
          )}
          <Icon
            className={`text-accent ${
              showNumber ? "text-xs" : "text-lg"
            }  transition-all duration-300 ease-in-out ${
              openAccordion ? "rotate-180" : ""
            }`}
            icon={IconList.ChevronDown}
          />
        </div>
      </div>
      {/* =========== content ========== */}
      <div
        className={"transition-all duration-300 overflow-hidden"}
        ref={contentRef}
        style={{
          maxHeight: openAccordion && contentHeight ? contentHeight : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
