const ProgressBar = ({ filledRate }: { filledRate: number }) => {
  return (
    <div className="w-full h-4 rounded-2xl border overflow-hidden relative">
      {/* progress div */}
      <div
        className="absolute bg-primary left-0 h-full transition-all duration-500"
        style={{ width: filledRate * 100 + "%" }}
      ></div>
    </div>
  );
};
export default ProgressBar;
