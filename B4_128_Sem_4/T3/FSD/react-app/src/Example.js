import Prop2 from './Prop2.js'
import r from './r.png'
import q from './q.png'
import p from './p.png'
export default function Example(){
      const products = [
    {
      name: 'Smartphone',
      price: 9500,
      image: r
    },
    {
      name: 'Laptop',
      price: 55000,
      image: r
    },
    {
      name: 'Headphones',
      price: 2500,
      image: q
    },
    {
      name: 'Keyboard',
      price: 1200,
      image: p
    }
  ];

    return(
    <>
    <Prop2 data={products}/>
    </>
    )
}
