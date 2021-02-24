import React from 'react';
import './Home.css';
import Product from "./Product";
function Home() {
    return (
        <div className="home">
        <div className="home__image"> 
            <img width="100%" height="320px" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/Feb21/01_7TH-FEB-pc2x._CB661443881_.jpg" alt=""/>
            </div>
<div className="home__row">
<Product
       id="1232425551"
       title="Olive Oil"
       price={450}
       rating={2}
       image="https://m.media-amazon.com/images/I/41OQms4W6UL.__AC_SY400_.jpg"
       
       />
       <Product
       id="1232425552"
       title="Dettol Handwash"
       price={218}
       rating={4}
       image="https://images-eu.ssl-images-amazon.com/images/I/51yOtRX5%2BSL.jpg"
       
       />
</div>
<div className="home__row">
<Product
       id="1232425553"
       title="Bournvita"
       price={376}
       rating={4}
       image="https://m.media-amazon.com/images/I/51gn+ccasqL._AC_UL480_FMwebp_QL65_.jpg"
       
       />
       <Product
       id="1232425554"
       title="Surf Excel"
       price={177}
       rating={3}
       image="https://m.media-amazon.com/images/I/61JjrPGRnTL._AC_UL480_FMwebp_QL65_.jpg"
       
       />
       <Product
       id="1232425555"
       title="Parachute Oil"
       price={323}
       rating={4}
       image="https://m.media-amazon.com/images/I/61nBoAnPSEL._AC_UL480_FMwebp_QL65_.jpg"
       
       />
</div>
       
</div>
    )
}

export default Home
