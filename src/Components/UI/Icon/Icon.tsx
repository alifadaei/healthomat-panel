import React from "react";
import { GiPoisonCloud, GiBodyHeight } from "react-icons/gi";
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
  BsTextParagraph,
} from "react-icons/bs";
import { RiScales2Line } from "react-icons/ri";
import { TbNumbers } from "react-icons/tb";
import {
  IoTextOutline,
  IoPeopleOutline,
  IoCloudOutline,
  IoCloudDone,
  IoLocationSharp,
  IoClose,
  IoChevronDown,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoFilterOutline,
  IoExitOutline,
  IoSettingsOutline,
  IoCloud,
} from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";
import { FaBaby, FaGraduationCap } from "react-icons/fa";
import { BiCalendarCheck, BiTimeFive, BiHeart } from "react-icons/bi";
import { GiFruitBowl } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { AiOutlinePhone, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdOutlineDashboard, MdWorkOutline } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";

export enum IconList {
  Text,
  Numbers,
  CloudError,
  Diet,
  CloudDone,
  CloudFilled,
  Cloud,
  ChevronLeft,
  ChevronRight,
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
  Scale,
  People,
  Graduation,
  Work,
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
      case IconList.Text:
        return <BsTextParagraph />;
      case IconList.Numbers:
        return <TbNumbers />;
      case IconList.Work:
        return <MdWorkOutline />;
      case IconList.Graduation:
        return <FaGraduationCap />;
      case IconList.People:
        return <IoPeopleOutline />;
      case IconList.Scale:
        return <RiScales2Line />;
      case IconList.CloudError:
        return <GiPoisonCloud />;
      case IconList.CloudDone:
        return <IoCloudDone />;
      case IconList.Cloud:
        return <IoCloudOutline />;
      case IconList.CloudFilled:
        return <IoCloud />;
      case IconList.ChevronLeft:
        return <IoChevronBackOutline />;
      case IconList.ChevronRight:
        return <IoChevronForwardOutline />;
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
