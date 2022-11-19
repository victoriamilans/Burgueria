import { ShoppingCartCard } from "../ShoppingCartCard";
import { Cart } from "../Styles/cart";
import { TotalMoney } from "../TotalMoney";

export function ShoppingCart({
  cart,
  setCart,
  remove,
  addProduct,
  subtractProduct,
}) {
  return (
    <Cart>
      <header>
        <h2>Carrinho de compras</h2>
      </header>
      <ul>
        {cart.length === 0 ? (
          <li>
            <h2>Seu carrinho está vazio</h2>
            <span>Adicione itens</span>
          </li>
        ) : (
          <ShoppingCartCard
            cart={cart}
            remove={remove}
            addProduct={addProduct}
            subtractProduct={subtractProduct}
          />
        )}
      </ul>
      <TotalMoney cart={cart} setCart={setCart} />
    </Cart>
  );
}
