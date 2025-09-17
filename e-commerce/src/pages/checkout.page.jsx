import CartItem from "@/components/CartItem";
import ShippingAddressForm from "@/components/ShippingAddressForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function CheckoutPage() {
  const cart = useSelector((state) => state.cart.cartItems);

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <main className="px-6 sm:px-12 lg:px-20 min-h-screen py-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-white p-6 rounded-2xl shadow-md max-h-fit">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Details</h3>
          <div className="divide-y divide-gray-200 border-t border-b">
            {cart.length > 0 ? (
              cart.map((item, index) => <CartItem key={index} item={item} />)
            ) : (
              <p className="text-gray-500 py-6">No items in cart</p>
            )}
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Address</h3>
          <div className="w-full">
            <ShippingAddressForm />
          </div>
        </section>
      </div>
    </main>
  );
}

export default CheckoutPage;
