import { useGetAllProductsQuery, useGetProductsByCategoryQuery, useGetAllCategoriesQuery } from "@/lib/api";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard"; // ✅ Reuse card

function ShopPage() {
  const { category: slug } = useParams();
  const { data: categories } = useGetAllCategoriesQuery();
  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState(null); // ✅ add state for name

  useEffect(() => {
    if (categories && slug) {
      const category = categories.find((c) => c.slug === slug);
      setCategoryId(category?._id || null);
      setCategoryName(category?.name || null); // ✅ store name
    }
  }, [categories, slug]);

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
    <main className="py-8 px-4 lg:px-16">
      <div className="mb-6">
        <div className="text-sm text-gray-600">
          <span className=" text-xl">Shop</span>
          {slug && (
            <>
              <span className="mx-1 text-xl">/</span>
              <span className="text-3xl capitalize text-gray-800 font-medium">
                {categoryName}
              </span>
            </>
          )}
        </div>
      </div>

      {products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-4 md:gap-y-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </main>
  );
}

export default ShopPage;
