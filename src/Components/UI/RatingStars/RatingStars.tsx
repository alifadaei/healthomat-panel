import Icon, { IconList } from "../Icon/Icon";

interface RatingStarsProps {
  rate: number;
}

const RatingStars = ({ rate }: RatingStarsProps) => {
  if (rate > 5 || rate < 0) return <p>something went wrong</p>;
  const remainingOutlineStart = 5 - rate;
  return (
    <div className="flex flex-row-reverse text-accent-500 w-[6rem] justify-evenly">
      {[...Array(rate)].map((e, i) => (
        <Icon key={i} icon={IconList.StarFilled} />
      ))}
      {[...Array(remainingOutlineStart)].map((e, i) => (
        <Icon key={i} icon={IconList.StarOutline} />
      ))}
    </div>
  );
};

export default RatingStars;
