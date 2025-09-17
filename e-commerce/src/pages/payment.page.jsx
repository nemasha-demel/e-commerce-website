import CartItem from "@/components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useSearchParams } from "react-router";
import PaymentForm from "@/components/PaymentForm";

function PaymentPage() {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <main className="px-6 sm:px-12 lg:px-20 min-h-screen py-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Review Your Order</h2>

      <section className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <div className="divide-y divide-gray-200 border-t border-b">
          {cart.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <p className="text-xl font-semibold text-gray-800">
          Total Price: $
          {cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}
        </p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow-md">
        <PaymentForm orderId={orderId} />
      </section>
    </main>
  );
}

export default PaymentPage;
