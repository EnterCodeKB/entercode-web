"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import KontaktForm from "../form/page";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <KontaktForm />
    </Suspense>
  );
}
