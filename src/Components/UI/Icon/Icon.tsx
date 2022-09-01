import React from "react";
import {
  BsCheckLg,
  BsInstagram,
  BsWhatsapp,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsBookmarkPlus,
  BsShare,
  BsEye,
  BsPerson,
} from "react-icons/bs";
import {
  IoLocationSharp,
  IoClose,
  IoChevronDown,
  IoFilterOutline,
} from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";

import { GoSearch } from "react-icons/go";
import { AiOutlinePhone, AiOutlineStar, AiFillStar } from "react-icons/ai";

import { HiOutlineMenu } from "react-icons/hi";
export enum IconList {
  Hamburger,
  checkMark,
  Instagram,
  Twitter,
  Whatsapp,
  Pin,
  FaceBook,
  LinkedIn,
  ChevronDown,
  PinOutline,
  Filter,
  Search,
  Bookmark,
  Share,
  Person,
  Eye,
  Phone,
  Close,
  StarFilled,
  StarOutline,
}

type IconProps = {
  icon: IconList;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const Icon = (props: IconProps): React.ReactElement => {
  const { icon, className, style, onClick } = props;
  const renderIcon = () => {
    switch (icon) {
      case IconList.StarFilled:
        return <AiFillStar />;
      case IconList.StarOutline:
        return <AiOutlineStar />;
      case IconList.checkMark:
        return <BsCheckLg />;
      case IconList.Instagram:
        return <BsInstagram />;
      case IconList.Twitter:
        return <BsTwitter />;
      case IconList.FaceBook:
        return <BsFacebook />;
      case IconList.Whatsapp:
        return <BsWhatsapp />;
      case IconList.Pin:
        return <IoLocationSharp />;
      case IconList.LinkedIn:
        return <BsLinkedin />;
      case IconList.ChevronDown:
        return <IoChevronDown />;
      case IconList.PinOutline:
        return <TiLocationOutline />;
      case IconList.Filter:
        return <IoFilterOutline />;
      case IconList.Search:
        return <GoSearch />;
      case IconList.Bookmark:
        return <BsBookmarkPlus />;
      case IconList.Share:
        return <BsShare />;
      case IconList.Eye:
        return <BsEye />;
      case IconList.Person:
        return <BsPerson />;
      case IconList.Phone:
        return <AiOutlinePhone />;
      case IconList.Hamburger:
        return <HiOutlineMenu />;
      case IconList.Close:
        return <IoClose />;
      default:
        return <p>an error occured!</p>;
    }
  };

  return (
    <div className={className} style={style} onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
