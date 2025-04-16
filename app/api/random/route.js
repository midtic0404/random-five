export async function GET() {
  // Generate 5 random numbers between 1 and 100
  const numbers = Array.from({ length: 5 }, () => 
    Math.floor(Math.random() * 100) + 1
  );
  
  // Return the random numbers as JSON
  return new Response(JSON.stringify({ numbers }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}