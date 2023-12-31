import commerce from "../lib/commerce";
import ProductList from "../components/productList";
import React from "react";


export async function getStaticProps() {
    const { data:products }= await commerce.products.list();

    return{
        props: {
            products,
        },
    };
}

export default function ProductsPage({ products }) {
    return (
        <React.Fragment>

            <h1 className='bg-primary text-3xl text-black flex justify-center p-10'> Products </h1>

            <ProductList products={products} />
        </React.Fragment>
    );
}