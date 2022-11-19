import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { ShoppingCart } from "./components/ShoppingCart";
import { GlobalStyle } from "./components/Styles/global";
import { Container } from "./components/Styles/container";

function App() {
  const [productsList, setProductList] = useState([]);
  const [filter, setFilter] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProductList(response))
      .catch((err) => console.log(err));
  }, []);

  function removeProduct(remove) {
    const filtered = cart.filter((product) => {
      if (product !== remove) {
        return product;
      }
    });
    setCart(filtered);
  }

  function addProduct(product) {
    const productIndex = cart.findIndex((item) => {
      return item.id === product.id;
    });
    if (productIndex === -1) {
      const newProduct = { ...product, count: 1, quantity: 1 };
      setCart((old) => [...old, newProduct]);
    } else {
      const newProduct = {
        ...product,
        count: cart[productIndex].count + 1,
        quantity: cart[productIndex].quantity + 1,
      };
      const copy = [...cart];
      copy[productIndex] = newProduct;
      setCart(copy);
    }
  }

  function subtractProduct(product) {
    const productIndex = cart.findIndex((item) => {
      return item.id === product.id;
    });
    if (productIndex === -1) {
      const newProduct = { ...product, count: 1, quantity: 1 };
      setCart((old) => [...old, newProduct]);
    } else {
      const newProduct = {
        ...product,
        count: cart[productIndex].count - 1,
        quantity: cart[productIndex].quantity - 1,
      };
      const copy = [...cart];
      copy[productIndex] = newProduct;
      setCart(copy);
    }
  }

  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Header setInputValue={setFilter} />
      <Container>
        <ProductList
          list={productsList}
          filter={filter}
          setCart={setCart}
          cart={cart}
          addProduct={addProduct}
        />
        <div className="cartArea">
          <ShoppingCart
            cart={cart}
            remove={removeProduct}
            addProduct={addProduct}
            subtractProduct={subtractProduct}
            setCart={setCart}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
