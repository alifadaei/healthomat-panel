const Heading = ({ str }: { str: string }) => {
  return (
    <h1 className=" font-semibold text-gray-700 font-nunito text-2xl border-primary border-s-4  ps-2 ">
      {str}
    </h1>
  );
};
export default Heading;
