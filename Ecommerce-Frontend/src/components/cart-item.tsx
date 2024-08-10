import {Link} from 'react-router-dom';
import {FaTrash} from 'react-icons/fa'
type CartItemsProps = {
    cartItem: any;
};
const CartItem = ({cartItem}:CartItemsProps) => {
    const {photo,productID,name,price,quantity} = cartItem;
  return (
    <div className="cart-item">
        <img src={photo} alt={name} />
        <article>
        <Link to={`/product/${productID}`}>{name}</Link>
        <span>{price}</span>
        </article>
        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>
        <button><FaTrash/></button>
    </div>
  )
}

export default CartItem;