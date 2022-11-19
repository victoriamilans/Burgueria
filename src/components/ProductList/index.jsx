import { ProductCard } from "../ProductCard";
import { StyledList } from "../Styles/productList";

export function ProductList({ list, filter, setCart, cart, addProduct }) {
  return (
    <StyledList>
      <ul>
        {filter.length > 0
          ? list.map((product) => {
              if (
                product.name.toLowerCase().includes(filter) ||
                product.category.toLowerCase().includes(filter)
              ) {
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    setCart={setCart}
                    cart={cart}
                    addProduct={addProduct}
                  />
                );
              }
            })
          : list.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  setCart={setCart}
                  cart={cart}
                  addProduct={addProduct}
                />
              );
            })}
      </ul>
    </StyledList>
  );
}
