import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import CartItem from "@/components/CartItem";

function CartPage() {
  const cart = useSelector((state) => state.cart.cartItems);

  return (
    <main className="px-6 sm:px-12 lg:px-20 min-h-screen py-10 bg-white">
      <h2 className="text-3xl font-bold text-gray-900">My Cart</h2>

      <div className="mt-6 divide-y divide-gray-200 border-t border-b">
        {cart.length > 0 ? (
          cart.map((item, index) => <CartItem key={index} item={item} />)
        ) : (
          <p className="text-gray-500 py-6">No items in cart</p>
        )}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 flex justify-end">
          <Button
            asChild
            className="bg-black text-white px-6 py-3 rounded-lg cursor-pointer"
          >
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
        </div>
      )}
    </main>
  );
}

export default CartPage;
