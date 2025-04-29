// app/kontakt/page.js
import { Suspense } from "react";
import FormComponent from "@/app/components/FormComponent";

export default function Page() {
  return (
    <Suspense fallback={<div>Laddar formulär...</div>}>
      <FormComponent />
    </Suspense>
  );
}
