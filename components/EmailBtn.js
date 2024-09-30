import Image from "next/image";
import Link from "next/link";

export default function Button() {
  return (
    <button>
      <img
        src="/epost-knapp.jpeg"
        alt="e-post knapp"
        width={350} // Ange bildstorlek
        height={350} // Ange bildstorlek
        priority
      />
    </button>
  );
}
Button;
