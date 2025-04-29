import { Suspense } from "react";
import FormInnerComponent from "@/app/components/FormInnerComponent";

export default function Page({ searchParams }) {
  const paket = searchParams?.paket || "";

  return (
    <Suspense fallback={<div>Laddar formulär...</div>}>
      <FormInnerComponent paket={paket} />
    </Suspense>
  );
}
