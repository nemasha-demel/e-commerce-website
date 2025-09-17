function CartItem({ item }) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <img
          src={item.product.image || "/placeholder.svg"}
          alt={item.product.name}
          className="w-16 h-16 object-cover rounded-md border"
        />
        <div>
          <p className="font-medium text-gray-900">{item.product.name}</p>
          <p className="text-gray-600 text-sm">${item.product.price}</p>
        </div>
      </div>

      <p className="text-sm text-gray-500">x {item.quantity}</p>
    </div>
  );
}

export default CartItem;
