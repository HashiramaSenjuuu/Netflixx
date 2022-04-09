import React, { useEffect, useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div>
      <div
        className={`flex justify-between px-5  sm:px-6 sm:mx-0   ${
          show && "bg-[#111]"
        } items-center fixed top-0 w-full z-10  transition-all transition-duration-300 ease-in h-16  sm:h-20`}
      >
        <div>
          <img
            className="h-20 relative -left-3 sm:left-0  sm:h-28"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix"
          />
        </div>

        <div>
          <img
            className="h-8 sm:h-10 cursor-pointer z-10"
            src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
