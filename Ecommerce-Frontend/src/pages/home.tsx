
import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";
const Home = () => {
  const addToCartHandler = () => {

  };
  return (
    <div className="home">

      <section>

      </section>
      <h1>
        Latest Product
        <Link to={"/search"}>More</Link>
      </h1>
      <main>
        <ProductCard
          productId="dscfc"
          photo="https://m.media-amazon.com/images/I/81bV0XE79uL._AC_SY575_.jpg"
          name="necklace"
          price={900}
          stock={3}
          handler={addToCartHandler} />
      </main>
    </div>
  )
}

export default Home