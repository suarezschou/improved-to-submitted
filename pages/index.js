import'./_app'
import commerce from '../lib/commerce'
import ProductList from '../components/productList';
import CategoryList from '../components/categoryList';
import Link from 'next/link';
import React from 'react';

export async function getStaticProps() {
    const merchant = await commerce.merchants.about()
    const {data: categories} = await commerce.categories.list()
    const {data: products} = await commerce.products.list()

    return{
        props: {
            merchant,
            categories,
            products
        },
    };
}

export default function Indexpage({merchant, categories, products}){
    return (
        <React.Fragment>
            <h1> {merchant.business_name} </h1>
            <h1 className="text-4xl text-blue-600 flex justify-center py-10"> André's Web shop </h1>

            <h3 className='text-3xl text-blue-600 flex justify-center'>
                <Link legacyBehavior href="/categories">
                    <a>Categories</a>
                </Link>
            </h3>

            <h4 className='text-2xl text-green-500 flex justify-center p-10'>
            <CategoryList categories={categories} />
            </h4>

            <h3 className='text-3xl text-blue-600 flex justify-center p-10'>
                <Link legacyBehavior href="/products">
                    <a>Products</a>
                </Link>
            </h3>
            
            <ProductList products={products} />
            
        </React.Fragment>
    );
}
