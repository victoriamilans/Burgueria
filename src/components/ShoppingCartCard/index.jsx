import { CartCard } from "../Styles/cartCard";
import 'animate.css';

export function ShoppingCartCard({
  cart,
  setCart,
  remove,
  addProduct,
  subtractProduct,
}) {
  return cart.map((product, index) => {
    return (
      <CartCard key={index} className="animate__animated animate__bounceInLeft">
        <div className="productContent">
          <img src={product.img} alt="" />
          <div className="product">
            <h2>{product.name}</h2>
            <span>{product.category}</span>
          </div>
        </div>
        <div className="cardQuantity">
          <button type="button" onClick={() => addProduct(product)}>
            +
          </button>
          <span>{product.count}</span>
          <button
            type="button"
            onClick={() => {
              product.count < 2 ? remove(product) : subtractProduct(product);
            }}
          >
            -
          </button>
        </div>
      </CartCard>
    );
  });
}
