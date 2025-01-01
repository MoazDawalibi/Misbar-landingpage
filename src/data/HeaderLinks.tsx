import { AiOutlineHome } from "react-icons/ai";
import { TbDeviceMobileCog, TbDeviceMobileMessage } from "react-icons/tb";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlinePrivacyTip } from "react-icons/md";

export const HedaerLinksArray: HedaerLinksProps[] = [
  { isOnlyDrawer: false, icon: AiOutlineHome, name: 'Home', href: '/' },
  { isOnlyDrawer: false, icon: TbDeviceMobileMessage, name: 'Projects', href: '/projects' },
  { isOnlyDrawer: false, icon: TbDeviceMobileCog, name: 'Services', href: '/services' },
  { isOnlyDrawer: false, icon: AiOutlineExclamationCircle, name: 'About', href: '/about' },
  { isOnlyDrawer: false, icon: LiaQuestionCircleSolid, name: 'Contact', href: '/contact' },
  { isOnlyDrawer: true, icon: LiaQuestionCircleSolid, name: 'Terms & Conditions', href: '/terms' },
  { isOnlyDrawer: true, icon: MdOutlinePrivacyTip, name: 'Privacy Policy', href: '/privacy' },
];

