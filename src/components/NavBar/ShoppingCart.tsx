import shopping_cart from '../../assets/shopping_cart.svg';

const ShoppingCart = () => {
    return (
        <div className='p-[10px]'>
            <img src={shopping_cart} alt="Shopping Cart SVG" />
        </div>
    )
}

export {
    ShoppingCart
}