import { useEffect } from "react";
import { useState } from "react";
const useDropdown = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpen((state) => !state);
  };
  useEffect(() => {
    document.addEventListener("click", () => {
      setOpen(false);
    });
  }, []);

  return { dropdownOpen, handleClick };
};
export default useDropdown;
