import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from "./StateProvider";

function Product({id,title,price,rating,image}) {
    const [{},dispatch] = useStateValue();
    const addToBasket = ()=> {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }

        })
    };
    return (
        <div className="product">
            <div className="product__info">
            <strong>{title}</strong>
            <p className="prodct__price">
               
                <p>Rs {price}</p>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=>
                    <p><StarIcon style={{ color: "gold" }} /></p>)
                }
            </div>
            </div>
           
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to bakset</button>
        </div>
    )
}

export default Product
