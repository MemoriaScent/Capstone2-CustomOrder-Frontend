import CartInfo from "@/components/organism/Cart";
import CartDetBtn from "@/components/molecule/CartDetBtn";
import Inquiry11 from "@/components/organism/Inquiry";

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