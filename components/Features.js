import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <section
      className="flex-row flexCenter overflow-hidden bg-feature-bg
    bg-center bg-no-repeat py-24 "
    >
      <p>FEATURES</p>

      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <img
            src="/10840356_4573781.jpg"
            alt="om vår arbete"
            width={500}
            height={800}
            className="feature-phone"
          />
        </div>
      </div>
    </section>
  );
}
