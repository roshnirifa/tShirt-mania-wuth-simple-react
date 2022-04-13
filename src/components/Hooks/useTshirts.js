import { useEffect, useState } from "react"

const useTshirt = () => {
    const [tShirts, setTshirts] = useState([]);
    useEffect(() => {
        fetch('t-shirt.json')
            .then(res => res.json())
            .then(data => setTshirts(data))
    }, [])
    return [tShirts, setTshirts]
}
export default useTshirt;
