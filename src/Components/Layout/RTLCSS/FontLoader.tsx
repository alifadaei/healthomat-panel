import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LTR from "./LTR";
import RTL from "./RTL";
const FontLoader = () => {
  const { i18n } = useTranslation();
  const [RTLState, setRTL] = useState<"LTR" | "RTL" | "?">("LTR");

  useEffect(() => {
    if (i18n.language === "fa") {
      setRTL("RTL");
    } else {
      setRTL("LTR");
    }
  }, [i18n.language]);
  return (
    <>{RTLState === "RTL" ? <RTL /> : RTLState === "LTR" ? <LTR /> : null}</>
  );
};
export default FontLoader;
