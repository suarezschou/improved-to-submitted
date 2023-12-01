import commerce from "../../lib/commerce";
import React from "react";
import ProductImages from "../../components/ProductImages";
import { useCartDispatch } from "../../context/cart";
import Link from 'next/link';
import Image from "next/image";
import logo from "../../public/schous_logo.svg";

export async function getStaticProps({params}){
    const {permalink} = params;

    const product = await commerce.products.retrieve(permalink,{
        type: 'permalink',
    });

    return{
        props: {
            product,
        },
    };
}

export async function getStaticPaths(){
    const {data:products} = await commerce.products.list();

    return{
        paths: products.map((products) => ({
            params: {
                permalink: products.permalink,
            },
        })),
        fallback:false,
    };
}

export default function ProductPage({product}) {
    const {assets} = product;
    const images = assets.filter(({ is_image }) => is_image);

    const {setCart} = useCartDispatch()

    const addToCart = () => commerce.cart.add(product.id).then(({cart}) => setCart(cart));
    
    return (
        <React.Fragment>
            <main className="bg-primary">
            <nav className="py-10 mb-12 flex justify-center">
                <div className='w-64 h-32'>
                    <Image src={logo} alt={"image of the logo"}/>
                </div>
                <h1 className="text-xl">
                    <Link legacyBehavior href="../cart">
                    <a>Cart</a>
                    </Link>
                </h1>
                
            </nav>
            
            <h1 className="text-3xl text-black flex justify-center p-10">{product.name}</h1>

            <p className="text-2xl text-primary flex justify-center p-10">{product.price.formatted_with_symbol}</p>
            
            <div className="p-10 flex justify-center">
                <ProductImages images={images} />
            </div>
            <div className="flex justify-center">
                <button className="bg-black text-2xl hover:bg-opacity-50 text-primary py-10" onClick={addToCart}>
                Add to cart
                </button>
            </div>

            
            </main>
        </React.Fragment>
    )
}