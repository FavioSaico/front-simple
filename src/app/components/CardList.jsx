import { useEffect, useState } from "react"
import { Card } from "./Card"
import data from "./../../../data/products.json"

export const CardList = () =>{ // debe recibir de parametro a publisher, sea DC o Marvel

    // console.log(datas)
    const [products, setProducts] = useState();

    setTimeout(()=>{
        setProducts(data);
    },2000)
    // console.log(products)

    return(
        // una columna en movil, 3 columnas en mediano
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {
                products ? (
                    products.map(product => (
                        <Card
                            key={product._id}
                            {...product}
                        />
                    ))
                ):(
                    <p>Cargando...</p>
                )
                
            }
        </div>
    )
}