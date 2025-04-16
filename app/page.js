export default async function Home() {
  // Server-side fetch for random numbers
  const response = await fetch('http://localhost:3000/api/random', { cache: 'no-store' });
  const { numbers } = await response.json();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Random Numbers</h1>
      <div className="flex gap-4">
        {numbers.map((number, index) => (
          <div key={index} className="p-4 bg-blue-100 rounded-md">
            <span className="text-2xl">{number}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
