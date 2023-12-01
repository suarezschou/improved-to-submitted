import { useCartDispatch, useCartState } from "../context/cart";
import commerce from '../lib/commerce';

function CartItem({id, name,quantity,line_total}){
    const {setCart} = useCartDispatch();

    const handleUpdateCart = ({cart}) => setCart (cart);

    const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);

    //ternary operators 3 operands
    const decrementQuantity = () =>{
        quantity > 1 
        ? commerce.cart
            .update(id,{quantity:quantity - 1})
            .then(handleUpdateCart)
        : removeItem();
    };

    const incrementQuantity = () =>{
        commerce.cart(id,{quantity:quantity + 1}).then(handleUpdateCart);
    }

    return (
        <div>
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{line_total.formatted_with_symbol}</p>
            <div>
                <button className="bg-black text-2xl hover:bg-opacity-50 text-primary py-10" onClick={decrementQuantity}>-</button>
                <button className="bg-black text-2xl hover:bg-opacity-50 text-primary py-10" onClick={incrementQuantity}>+</button>
            </div>
            <button className="bg-black text-2xl hover:bg-opacity-50 text-primary py-10" onClick={removeItem}>Remove item from the cart</button>
        </div>
    );
}

export default function CartPage() {
    const { line_items, subtotal } = useCartState();
  
    const isEmpty = line_items.length === 0;
  
    if (isEmpty) return
     <p>Your cart is empty</p>;
  
    return (
      
      <div className="bg-primary flex flex-col text-2xl">
        <h1>Cart has these items</h1>
        
       
        {line_items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
       

  
        <p>
          Sub total: {subtotal.formatted_with_symbol}
        </p>
      </div>
    );
  }