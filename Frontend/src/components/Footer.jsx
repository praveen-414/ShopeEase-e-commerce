import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Help Center", path: "/help" },
    { name: "Shipping Info", path: "/shipping-info" },
    { name: "Returns & Refunds", path: "/returns&refunds" },
    { name: "FAQs", path: "/FAQs" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];
  const quickLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Categories",
      path: "categories",
    },
    {
      name: "About",
      path: "about",
    },
    {
      name: "Contact",
      path: "contact",
    },
    {
      name: "My Orders",
      path: "my-orders",
    },
  ];
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E5E7EB]">
      <div className="max-w-[90%] mx-auto px-6 lg:px-8 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-[#111827]">
              Shop<span className="text-[#0EA5E9]">Ease</span>
            </h2>

            <p className="mt-5 text-[#6B7280] leading-7">
              ShopEase is your trusted destination for quality products at
              unbeatable prices. We make online shopping simple, secure, and
              enjoyable.
            </p>

            <div className="flex items-center gap-4 mt-7">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="w-11 h-11 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#111827] relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-14 h-1 rounded-full bg-[#0EA5E9]"></span>
            </h3>

            <ul className="mt-8 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    href="#"
                    className="text-[#6B7280] hover:text-[#4F46E5] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-xl font-semibold text-[#111827] relative inline-block">
              Customer Support
              <span className="absolute -bottom-2 left-0 w-14 h-1 rounded-full bg-[#0EA5E9]"></span>
            </h3>

            <ul className="mt-8 space-y-4">
              {links.map((item) => (
                <li key={item}>
                  <Link
                    to={item.path}
                    href="#"
                    className="text-[#6B7280] hover:text-[#4F46E5] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-[#111827] relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-14 h-1 rounded-full bg-[#0EA5E9]"></span>
            </h3>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <HiOutlineEnvelope
                  className="text-[#0EA5E9] flex-shrink-0 mt-1"
                  size={22}
                />
                <span className="text-[#6B7280]">support@shopease.com</span>
              </div>

              <div className="flex gap-4">
                <HiOutlinePhone
                  className="text-[#0EA5E9] flex-shrink-0 mt-1"
                  size={22}
                />
                <span className="text-[#6B7280]">+91 98765 43210</span>
              </div>

              <div className="flex gap-4">
                <HiOutlineMapPin
                  className="text-[#0EA5E9] flex-shrink-0 mt-1"
                  size={22}
                />
                <span className="text-[#6B7280]">
                  Hyderabad, Telangana,
                  <br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7280] text-sm text-center md:text-left">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              to="termsofservice"
              className="text-[#6B7280] hover:text-[#4F46E5] transition"
            >
              {" "}
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
