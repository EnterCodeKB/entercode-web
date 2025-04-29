"use client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { Suspense } from "react";
import FormComponent from "@/app/components/FormComponent";

export default function Page() {
  return (
    <Suspense fallback={<div>Laddar formulär...</div>}>
      <FormComponent />
    </Suspense>
  );
}
