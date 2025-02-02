import { notFound } from "next/navigation";

interface PageProps {
  params: { id?: string };
}

export default function Page({ params }: PageProps) {
  if (!params?.id) {
    return notFound();
  }

  return <div>Topic Page: {params.id}</div>;
}
