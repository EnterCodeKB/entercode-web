//trycke "rafce" för att få en standard kod
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants/index";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="box41 " style={{ gridRow: 3 }}>
        <Link href="/" className="mb-10">
          <img
            className="logo"
            src="/f4460ca6-a67e-462e-be2f-d7606588c249.png"
            alt="logo"
          />
        </Link>
      </div>

      <div className="box42" style={{ gridRow: 3 }}>
        <ul>
          <li>
            <Link href="/" className="text-white hover:text-gray-500 font-bold">
              Ta reda på mer
            </Link>
          </li>
          <br />
          <li>
            <Link href="/" className="text-white hover:text-gray-500 font-bold">
              Våra projekt
            </Link>
          </li>
          <br />
          <li>
            <Link href="/" className="text-white hover:text-gray-500 font-bold">
              Kontakta oss
            </Link>
          </li>
        </ul>
      </div>

      <div className="box43 " style={{ gridRow: 3 }}>
        <Link href="https://www.linkedin.com/in/helena-adelsten-b032a028/">
          <img src="/LinkedIn, Color=Original.svg" alt="LinkedIn logo" />
        </Link>

        <img src="/Instagram, Color=Original.png" />

        <img src="/Facebook, Color=Original.svg" alt="Facebookslogo" />
      </div>
      <div className="border items-end flex flex-row border-white text-gray-50">
        <p className="text-[14px] font-[400]; w-full text-center text-gray-50">
          2024 EnterCode Sweden | All rights reserved
        </p>
      </div>
    </div>
  );
}

/* 
  
            
          
*/
