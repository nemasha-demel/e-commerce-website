import { useGetAllProductsQuery, useGetProductsByCategoryQuery } from "@/lib/api";
import { useParams } from "react-router";

// Map slugs (in URL) → actual MongoDB categoryId
const categoryMap = {
  shoes: "685ac6bba656af765048352c",
  tshirts: "685ac6caa656af765048352f",
  shorts: "685ac6caa656af765048352e",
  pants: "685ac6caa656af7650483530",
  socks: "685ac6caa656af7650483531",
};

function ShopPage() {
  const { category } = useParams(); // slug from URL (e.g. "shoes")
  const categoryId = category ? categoryMap[category] : null;

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = categoryId
    ? useGetProductsByCategoryQuery(categoryId)
    : useGetAllProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {JSON.stringify(error)}</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shop Page</h1>
      {category && <h2 className="text-lg mb-2 capitalize">Category: {category}</h2>}

      {products?.length > 0 ? (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <li key={product._id} className="border rounded-lg p-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-2 rounded-md"
              />
              <h3 className="font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p className="text-gray-600">${product.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </main>
  );
}

export default ShopPage;
