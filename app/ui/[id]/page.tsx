import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  if (!params?.id) {
    return notFound();
  }

  // Simulate Page loading
  await new Promise((r) => setTimeout(r, 3000));

  return <div>Topic Page: {params.id}</div>;
}
