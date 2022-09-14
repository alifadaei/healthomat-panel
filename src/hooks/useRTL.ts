import { useEffect } from "react";
import { useState } from "react";
const useRTL = () => {
  const [isRTL, setIsRTL] = useState(false);
  useEffect(() => {
    if (document.body.dir === "rtl") setIsRTL(true);
    else setIsRTL(false);
  }, [document.body.dir]);

  return isRTL;
};
export default useRTL;
