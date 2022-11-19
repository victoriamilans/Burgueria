import { StyledTotal } from "../Styles/totalMoney";

export function TotalMoney({ cart, setCart }) {
  const value = cart.map((product) => {
    return { price: product.price, quantity: product.quantity };
  });

  if (cart.length > 0) {
    const totalValue = value
      .reduce((acc, act) => {
        return acc + act.price * act.quantity;
      }, 0)
      .toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency",
        minimumIntegerDigits: 2,
      });

    return (
      <StyledTotal>
        <div>
          <h2>Total</h2>
          <span>{totalValue}</span>
        </div>
        <button onClick={() => setCart([])}>Remover todos</button>
      </StyledTotal>
    );
  }
}
