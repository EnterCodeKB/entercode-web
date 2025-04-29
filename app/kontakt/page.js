"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import FormComponent from "../components/FormComponent";

export default function Page() {
  return (
    <Suspense fallback={<div>Laddar formulär...</div>}>
      <FormComponent />
    </Suspense>
  );
}
