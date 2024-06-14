import { useEffect } from "react";

export default function useCart() {
    const serverUrl = process.env.NEXT_PUBLIC_API_SERVER_URL;
    const serverPort = process.env.NEXT_PUBLIC_API_SERVER_PORT;
    
    const addCartLocal = (e: React.MouseEvent<HTMLButtonElement>, product: { id: number; Name: string; Image: string; Price: number }, count: number) => {
        // 로컬 스토리지에서 기존 장바구니 데이터를 가져옴
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
        
        // 동일한 제품이 있는지 확인
        const productIndex = existingCart.findIndex((item: { product: { id: number } }) => item.product.id === product.id);
        
        if (productIndex !== -1) {
          // 동일한 제품이 있으면 count를 더함
          existingCart[productIndex].count += count;
        } else {
          // 동일한 제품이 없으면 새로 추가
          existingCart.push({ product, count });
        }
        
        // 업데이트된 장바구니를 로컬 스토리지에 저장
        localStorage.setItem('cart', JSON.stringify(existingCart));
      }


    const addCart = async (e: React.MouseEvent<HTMLButtonElement>,product: { id: number; Name: string; Image: string; Price: number }, count:number) => {

        try {
            
            const response = await fetch(`${serverUrl}:${serverPort}/cart`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId: product.id,
                    quantity: count
                }) // body 내용 추가 (필요한 데이터를 여기에 추가)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return { addCart,
        addCartLocal,
     }; 
}