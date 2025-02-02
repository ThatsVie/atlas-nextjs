export default function Page({ params }: { params: { id: string } }) {
  // Simulate slow page loading
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  delay(3000).then(() => {
    console.log("Simulated delay completed");
  });

  return <div>Topic Page: {params.id}</div>;
}
