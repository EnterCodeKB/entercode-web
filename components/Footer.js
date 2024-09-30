import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="box43 ">
        <img src="/fbvit1.png" alt="Facebookslogo" width={100} />
        <Link href="https://www.linkedin.com/in/helena-adelsten-b032a028/">
          <img src="/likedinvit1.png" alt="LinkedIn logo" width={100} />
        </Link>

        <img src="/instagramvit1.png" alt="Instagrams logo" width={100} />
      </div>
      <div className="">
        <p className="text-[14px] font-[400]; w-full text-center text-gray-50">
          2024 EnterCode Sweden | All rights reserved
        </p>
      </div>
    </div>
  );
}

/* 
  
            
          
*/
