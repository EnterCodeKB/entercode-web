import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <Link href="/">
          <Image
            className="logo"
            src="/logomedtext.png"
            alt="logo"
            width={160} // Ange bildstorlek
            height={160} // Ange bildstorlek
            priority // Optimera bilden för snabb laddning
          />
        </Link>
      </div>
      <ul>
        <li>
          <Link href={"/"}>
            <span className="hem">Hem</span>
          </Link>
        </li>
        <li>
          <Link href={"/hur-vi-gor"}>Hur vi gör</Link>
        </li>
        <li>
          <Link href={"/projekt"}>Våra projekt</Link>
        </li>
        <li>
          <Link href={"/kontakt"}>Kontakta Oss</Link>
        </li>
      </ul>

      {/* Logga in-knappen, om du vill använda den senare */}
      {/* 
      <div className="login lg:block">
        <Link href={"/login"}>
          <button>Logga in</button>
        </Link>
      </div>
      */}
    </nav>
  );
}
