import {
  FaFacebookF,
  FaInstagram,
  FaRedditAlien,
  FaWhatsapp,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
import { MdLocalShipping, MdOutlineAssignmentReturn } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { BsPatchCheck } from "react-icons/bs";

export default function ProductFooter() {
  return (
    <div className="mt-6 space-y-4 text-sm text-gray-700">
      {/* Features */}
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <BsPatchCheck className="text-blue-500" />
          <span>100% Original Product.</span>
        </li>
        <li className="flex items-center gap-2">
          <MdLocalShipping className="text-blue-500" />
          <span>Express Shipping</span>
        </li>
        <li className="flex items-center gap-2">
          <GiReceiveMoney className="text-blue-500" />
          <span>Cash on Delivery Available</span>
        </li>
        <li className="flex items-center gap-2">
          <MdOutlineAssignmentReturn className="text-blue-500" />
          <span>Easy return and exchange policy within 3 days</span>
        </li>
      </ul>

      <div>
        <p className="font-semibold">Description</p>
      </div>

      <div className="flex items-center space-x-4 text-xl mt-2">
        <FaFacebookF />
        <FaInstagram />
        <FaRedditAlien />
        <FaWhatsapp />
        <FaTiktok />
        <FaPinterest />
      </div>
    </div>
  );
}
