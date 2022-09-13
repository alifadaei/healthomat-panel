import FadeAnimation from "../../Animation/FadeAnimation";
import Icon, { IconList } from "../../Icon/Icon";

interface CheckBoxProps {
  title: string;
  className: string;
  checked?: boolean;
}

const CheckBox = ({ title, className, checked }: CheckBoxProps) => {
  return (
    <div className={`${className} flex items-center cursor-pointer`}>
      <div className="w-[1.2rem] h-[1.2rem] border-2 border-gray-400 flex items-center justify-center">
        <FadeAnimation show={!!checked} duration={300}>
          <Icon className="text-primary" icon={IconList.checkMark} />
        </FadeAnimation>
      </div>
      <label
        htmlFor="vehicle1"
        className="text-xs mx-2 font-light cursor-pointer"
      >
        {title}
      </label>
    </div>
  );
};

export default CheckBox;
