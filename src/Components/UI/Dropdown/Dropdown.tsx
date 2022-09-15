const Dropdown = ({
  children,
  show,
  positionRem,
}: {
  positionRem: number;
  show: boolean;
  children: React.ReactElement;
}) => {
  if (show)
    return (
      <div
        style={{ right: `${positionRem}rem` }}
        className="z-50 absolute top-0  bg-white rounded-lg border"
      >
        {children}
      </div>
    );
  else return null;
};
export default Dropdown;
