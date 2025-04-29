"use client";

import dynamic from "next/dynamic";

const FormComponent = dynamic(() => import("@/app/components/FormComponent"), {
  ssr: false,
});

export default function Page() {
  return (
    <div>
      <FormComponent />
    </div>
  );
}
