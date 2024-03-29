type CardProps = {
  children: React.ReactNode;
  className: string;
  enableShadow?: boolean;
  onClick?: (input?: any) => void;
};
const Card = (props: CardProps) => {
  const { className, enableShadow, children, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`rounded-3xl ${className} ${enableShadow ? "shadow-sm" : ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
