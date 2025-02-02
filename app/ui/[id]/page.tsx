export default async function Page({ params }: { params: { id: string } }) {
  // Ensure params.id exists to avoid misinterpretation
  if (!params || !params.id) {
    return <div>Error: No topic ID provided.</div>;
  }

  // Simulate slow page loading
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>Topic Page: {params.id}</div>;
}
