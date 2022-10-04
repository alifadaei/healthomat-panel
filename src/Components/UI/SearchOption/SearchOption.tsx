import Input, { Ref } from "../FormElements/Input/Input";
import React, { useEffect, useRef, useState } from "react";
import CheckBox from "../FormElements/CheckBox/CheckBox";
import Icon, { IconList } from "../Icon/Icon";
import FadeAnimation from "../Animation/FadeAnimation";

type item = {
  name: string;
  id: string;
  checked?: boolean;
};
interface SearchOptionProps {
  name: string;
  inputList: item[];
  maxHeightRem?: number;
  limitOne?: boolean;
  dispatchFunction?: (id: string) => void;
}

const SearchOption = ({
  inputList,
  name,
  maxHeightRem,
  dispatchFunction,
}: SearchOptionProps) => {
  const inputRef = useRef<Ref>(null);
  const [baseList, setBaseList] = useState(inputList);
  useEffect(() => {
    setBaseList(
      inputList.map((item) =>
        item.checked ? item : { ...item, checked: false }
      )
    );
    setInputTerm("");
    inputRef.current!.value = "";
  }, [inputList]);

  const [inputTerm, setInputTerm] = useState("");

  const checkedItems = baseList.filter((item) => item.checked);
  const searchList = baseList.filter((item) => item.name.includes(inputTerm));
  const handleClickCheckbox = (id: string) => {
    setBaseList((item) =>
      item.map((checkObj) => {
        if (checkObj.id === id)
          return { ...checkObj, checked: !checkObj.checked };
        return checkObj;
      })
    );
    if (dispatchFunction) dispatchFunction(id);
  };

  const handleChangeInput = () => {
    const searchTerm = inputRef.current!.value;
    setInputTerm(searchTerm);
  };
  const handleRemoveItem = (id: string) => {
    setBaseList((item) =>
      item.map((checkObj) => {
        if (checkObj.id === id) return { ...checkObj, checked: false };
        return checkObj;
      })
    );
  };
  return (
    <div className="px-1">
      <Input
        onChange={handleChangeInput}
        ref={inputRef}
        className="py-2 border rounded-xl ps-2 my-2"
        type="text"
        placeholder={`جستجوی ${name}`}
      />

      <div
        className="max-h-[10rem] overflow-y-scroll "
        style={{ maxHeight: `${maxHeightRem}rem` }}
      >
        {/* ====== selected items ======= */}
        {checkedItems.length ? (
          <div className="px-2 flex flex-wrap text-[.7rem]">
            {checkedItems.map((item) => (
              <FadeAnimation key={item.id} show={true} duration={1000}>
                <span
                  key={item.id}
                  className="rounded-3xl bg-primary-100 border border-primary-500  px-3 py-1 m-1 font-iransans font-light flex items-center"
                >
                  {item.name}
                  <Icon
                    onClick={handleRemoveItem.bind(null, item.id)}
                    className="ms-1 p-1 rounded-full hover:bg-accent hover:p-1 hover:text-white hove transition-all cursor-pointer"
                    icon={IconList.Close}
                  />
                </span>
              </FadeAnimation>
            ))}
          </div>
        ) : (
          <div className="font-dana font-extrabold text-center px-3 py-2 m-1 text-gray-400">
            آیتمی را انتخاب کنید
          </div>
        )}

        {/* ======== all items filtered by search term ======= */}
        {searchList.length ? (
          <ul className=" px-2">
            {searchList.map((item, index) => (
              <li
                onClick={handleClickCheckbox.bind(null, item.id)}
                key={index}
                className="border-b last:border-b-0 border-dashed"
              >
                <CheckBox
                  className="py-3 cursor-pointer"
                  title={item.name}
                  checked={item.checked}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 ps-2 my-2">یافت نشد :/</p>
        )}
      </div>
    </div>
  );
};

export default SearchOption;
