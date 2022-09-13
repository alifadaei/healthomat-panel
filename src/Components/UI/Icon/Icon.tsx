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
  BsClipboardData,
} from "react-icons/bs";

import {
  IoLocationSharp,
  IoClose,
  IoChevronDown,
  IoFilterOutline,
  IoExitOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";
import { FaBaby } from "react-icons/fa";
import { BiCalendarCheck, BiTimeFive, BiHeart } from "react-icons/bi";

import { GoSearch } from "react-icons/go";
import { AiOutlinePhone, AiOutlineStar, AiFillStar } from "react-icons/ai";

import { MdOutlineDashboard } from "react-icons/md";

import { HiOutlineMenu } from "react-icons/hi";
export enum IconList {
  Settings,
  Exit,
  Calendar,
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
  Dashboard,
  Baby,
  Clock,
  ClipBoard,
  Heart,
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
      case IconList.Settings:
        return <IoSettingsOutline />;
      case IconList.Exit:
        return <IoExitOutline />;
      case IconList.Heart:
        return <BiHeart />;
      case IconList.ClipBoard:
        return <BsClipboardData />;
      case IconList.Clock:
        return <BiTimeFive />;
      case IconList.Baby:
        return <FaBaby />;
      case IconList.Calendar:
        return <BiCalendarCheck />;
      case IconList.Dashboard:
        return <MdOutlineDashboard />;
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
