import { StyledCard } from "../Styles/productCard";

export function ProductCard({ product, setCart, cart, addProduct }) {
  return (
    <StyledCard key={product.id} id={product.id}>
      <img src={product.img} alt="" />
      <div>
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <span>R${product.price}</span>
        <button
          type="button"
          onClick={() => {
            addProduct(product);
          }}
        >
          Adicionar
        </button>
      </div>
    </StyledCard>
  );
}
