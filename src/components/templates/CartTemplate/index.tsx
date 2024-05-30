import CartInfo from "@/components/organism/Cart";
import CartDetBtn from "@/components/molecule/CartDetBtn";

const CartInfoTemplate = () => {
    return(
        <div className="flex flex-col items-center justify-center mt-20 mx-auto">
            <CartInfo/>
            <div className="mt-105">
                <CartDetBtn/>
            </div>
        </div>
    );
};

export default CartInfoTemplate