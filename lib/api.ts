export async function fetchProducts() {
  const response = await fetch(
    `https://glore-bd-backend-node-mongo.vercel.app/api/product`,
    {
      next: {
        tags: ['products'],
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();
  return data.data;
}
