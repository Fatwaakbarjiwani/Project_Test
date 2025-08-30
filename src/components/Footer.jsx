import locationIcon from "../assets/location.svg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="max-w-primary sm:mx-auto mx-4 py-4 sm:py-16">
        {/* Mobile Layout */}
        <div className="sm:hidden grid grid-cols-3 space-y-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-14p font-[500] text-black">Quick link</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-black text-[12px] hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-[12px] hover:text-primary transition-colors"
                >
                  Facility
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-[12px] hover:text-primary transition-colors"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Villa Categories */}
          <div className="space-y-4">
            <h3 className="text-14p font-[500] text-black">Villa category</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-black text-[12px] hover:text-primary transition-colors"
                >
                  4 Bedroom Villa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-[12px] hover:text-primary transition-colors"
                >
                  2 Bedroom Villa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-[12px] hover:text-primary transition-colors"
                >
                  Joglo House
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-[12px] hover:text-primary transition-colors"
                >
                  Bamboo Studio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-[12px] hover:text-primary transition-colors"
                >
                  Bamboo House
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us - Mobile (Icons Only) */}
          <div className="space-y-4">
            <h3 className="text-14p font-[500] text-black">Contact Us</h3>
            <div className="flex gap-6">
              <img src={locationIcon} alt="location" className="w-6 h-6" />
              <img src={phoneIcon} alt="phone" className="w-6 h-6" />
              <img src={emailIcon} alt="email" className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:grid grid-cols-3 gap-16">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-[500] text-black">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-black text-lg hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-lg hover:text-primary transition-colors"
                >
                  Facility
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-lg hover:text-primary transition-colors"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Room Categories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-[500] text-black">Room Categories</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-black text-lg hover:text-primary transition-colors"
                >
                  4 Bedroom Villa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-lg hover:text-primary transition-colors"
                >
                  2 Bedroom Villa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-lg hover:text-primary transition-colors"
                >
                  Joglo House
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-lg hover:text-primary transition-colors"
                >
                  Bamboo Studio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black text-lg hover:text-primary transition-colors"
                >
                  Bamboo House
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us - Desktop (With Text) */}
          <div className="space-y-6">
            <h3 className="text-2xl font-[500] text-black">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <img
                  src={locationIcon}
                  alt="location"
                  className="w-5 h-5 mt-1"
                />
                <p className="text-black text-lg leading-relaxed">
                  Jl. Bukit Pelangi, Gunung Geulis, Sukaraja, Kab. Bogor, Jawa
                  Barat
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={phoneIcon} alt="phone" className="w-5 h-5" />
                <p className="text-black text-lg">+62812345678</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={emailIcon} alt="email" className="w-5 h-5" />
                <p className="text-black text-lg">example@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
