import { useTranslation } from "react-i18next";
import { updatePageDirection } from "../../functions/language";
import useDropdown from "../../hooks/useDropdown";
import useRTL from "../../hooks/useRTL";
import { languages } from "../../utils/languages";
import Dropdown from "../UI/Dropdown/Dropdown";
const LanguageSelect = () => {
  const { dropdownOpen, handleClick } = useDropdown();
  const { i18n } = useTranslation();
  const lng = i18n.language;
  const isRTL = useRTL();
  const onLangSelect = (lng: string) => {
    i18n.changeLanguage(lng);
    updatePageDirection();
  };
  return (
    <div className=" me-2 cursor-pointer flex items-center">
      <div onClick={handleClick} className="flex items-center border-x px-2">
        <span className="text-gray-500">{lng}</span>
        <img
          className="rounded w-7 h-5 ms-2 me-1"
          src={languages.find((item) => item.name === lng)!.icon}
          alt={lng}
        />
      </div>
      <div className="relative mt-8">
        <Dropdown positionRem={isRTL ? -5 : 0} show={dropdownOpen}>
          <div className="w-[6rem]">
            {languages.map((item, key) => (
              <div
                onClick={onLangSelect.bind(null, item.name)}
                key={key}
                className="px-3 py-2 flex justify-between hover:bg-gray-100"
              >
                {item.name}
                <img className="w-7 h-5" src={item.icon} alt={item.name} />
              </div>
            ))}
          </div>
        </Dropdown>
      </div>
    </div>
  );
};
export default LanguageSelect;
