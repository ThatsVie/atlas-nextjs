import { notFound } from "next/navigation";

export default function Page({ params }: { params: Record<string, string> }) {
  if (!params?.id) {
    return notFound();
  }

  return <div>Topic Page: {params.id}</div>;
}
