async function simulateLoading() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function Page({ params }: { params: { id: string } }) {
  // Simulate slow page loading
  await simulateLoading();

  return <div>Topic Page: {params.id}</div>;
}
