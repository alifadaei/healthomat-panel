type WrapperProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Wrapper = (props: WrapperProps) => {
  return (
    <div style={props.style} className={`max-w-[100rem] ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Wrapper;
