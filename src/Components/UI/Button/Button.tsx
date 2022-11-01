import { useEffect, useState } from "react";
import Icon, { IconList } from "../Icon/Icon";
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  neutral?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

const Button = ({
  onClick,
  loading,
  children,
  neutral,
  disabled,
  className,
}: ButtonProps) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  const colorClasses = disabled
    ? "bg-gray-100 text-gray-500 cursor-not-allowed "
    : neutral
    ? "bg-white text-gray-800 border-2 border-primary-500 hover:bg-primary-100 active:bg-primary-200 cursor-pointer"
    : "text-white bg-primary cursor-pointer hover:bg-primary-500 ";
  const rippleColor = `${
    neutral || disabled ? "bg-gray-200" : "bg-primary-200"
  }`;
  return (
    <button
      disabled={disabled}
      className={` transition-all outline-none rounded-2xl m-2 ${colorClasses} ripple-button ${className}`}
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        const elem = e.target as Element;
        const rect = elem.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
    >
      {isRippling ? (
        <span
          className={`ripple ${rippleColor}`}
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      <span
        className={`content flex justify-center items-center ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {loading ? (
          <Icon className="animate-spin text-lg" icon={IconList.Spinner} />
        ) : (
          children
        )}
      </span>
    </button>
  );
};
export default Button;
