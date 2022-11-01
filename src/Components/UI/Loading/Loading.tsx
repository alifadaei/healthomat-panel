import Icon, { IconList } from "../Icon/Icon";

const Loading = () => {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <Icon className="animate-spin text-lg" icon={IconList.Spinner} />
    </div>
  );
};
export default Loading;
