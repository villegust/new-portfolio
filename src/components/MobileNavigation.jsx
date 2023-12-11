import { FaUser } from "react-icons/fa";
import { FaIdBadge } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";

const MobileNavigation = () => {
  return (
    <div className="mobileNav">
      <div className="mobileNav__content">
        <a href="#about-me" className="mobileNav__content__icon">
          <FaUser size={24} />
        </a>
        <a href="#skills" className="mobileNav__content__icon">
          <FaIdBadge size={24} />
        </a>
        <a href="#projects" className="mobileNav__content__icon">
          <GrProjects size={24} />
        </a>
      </div>
    </div>
  );
};

export default MobileNavigation;
