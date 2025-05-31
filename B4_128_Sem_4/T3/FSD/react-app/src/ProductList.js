import p from './p.png'
import q from './q.png'
import r from './r.png'
import ProductCard from './ProductCard'
export default function ProductList(){
    const x=[{id:1,title:"Product 1",price:"3000",rating:"4.5",image:p},
        {id:2,title:"Product 2",price:"5000",rating:"4.5",image:q},
        {id:3,title:"Product 3",price:"8000",rating:"5",image:r}]
        return(
            <>
                <ProductCard details={x}/>
            </>
        )
}