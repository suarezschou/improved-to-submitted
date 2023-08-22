import commerce from "../../lib/commerce";
import React from "react";
import ProductImages from "../../components/ProductImages";

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
    return (
        <React.Fragment>
            
            <h1 className="text-3xl text-orange-500 flex justify-center p-10">{product.name}</h1>
            <p className="text-2xl text-blue-500 flex justify-center p-10">{product.price.formatted_with_symbol}</p>
            <div className="p-10">
            <ProductImages images={images} />
            </div>
        </React.Fragment>
    )
}