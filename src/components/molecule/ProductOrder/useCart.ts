export default function useCart() {
    const serverUrl = process.env.NEXT_PUBLIC_API_SERVER_URL;
    const serverPort = process.env.NEXT_PUBLIC_API_SERVER_PORT;

    const addCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            
            if (!token) {
                throw new Error('No token found');
            }
            const response = await fetch(`${serverUrl}:${serverPort}/cart`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({}) // body 내용 추가 (필요한 데이터를 여기에 추가)
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

    return { addCart }; // handleClick 함수를 반환
}