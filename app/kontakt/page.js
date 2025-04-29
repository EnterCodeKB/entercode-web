import FormComponent from "@/app/components/FormComponent";

export default function Page({ searchParams }) {
  const paket = searchParams?.paket || "";

  return <FormComponent paket={paket} />;
}
