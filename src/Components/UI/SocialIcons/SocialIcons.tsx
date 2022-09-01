import Link from "next/link";
import Icon, { IconList } from "../Icon/Icon";

interface SocialIconsProps {
  icons: { link: string; name: string; icon: IconList }[];
  className?: string;
}

const SocialIcons = ({ icons, className }: SocialIconsProps) => {
  return (
    <div className={`flex text-primary ${className}`}>
      {icons.map((icon, index) => (
        <Link key={index} href={icon.link}>
          <a>
            <Icon
              icon={icon.icon}
              className=" hover:-translate-y-1 transition-all duration-200"
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
