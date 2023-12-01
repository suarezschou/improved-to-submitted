
import commerce from '../lib/commerce'
import ProductList from '../components/productList';
import CategoryList from '../components/categoryList';
import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import logo from "../public/schous_logo.svg";

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

export default function IndexPage({merchant, categories, products}){
    return (
        <React.Fragment>
        <div className="bg-primary">
        
            <div className='flex justify-center h-60'>
                <Image src={logo} alt={"image of the logo"}/>
                </div>
        
                
        

            <h1 className='text-3xl text-black flex justify-center'>
                <Link legacyBehavior href="/categories">
                    <a>Categories</a>
                </Link>
            </h1>

            <h1 className='text-2xl flex justify-center p-10'>
            <CategoryList categories={categories} />
            </h1>
            <h1 className='text-3xl text-black flex justify-center p-10'>
            <Link legacyBehavior href="/products">
                    <a>Products</a>
            </Link>
            </h1>
            <h1 className='text-3xl text-black flex justify-center p-10'>
                <ProductList products={products} />
            </h1>

            <p className='flex justify-center p-10 text-black text-2xl'>
            Guitars come in various styles and designs, each catering to specific musical genres and playing techniques. Among the diverse array of guitars, three prominent types are Western, Classical, and Flamenco guitars.
            <h1 className='text-3xl text-black flex justify-center p-10'>
            Western Guitar:
            </h1>
            The Western guitar, also known as the steel-string acoustic guitar, is one of the most popular types globally. It features steel strings, which produce a bright and vibrant sound. This type of guitar is commonly used in various genres like folk, country, blues, and pop music. The body shape, often characterized by a larger size, contributes to its resonant sound projection. Western guitars are versatile and used in both solo performances and accompaniments.
            <h1 className='text-3xl text-black flex justify-center p-10'>
            Classical Guitar:
            </h1>
            The Classical guitar, renowned for its nylon strings and a wider neck, is closely associated with classical and traditional music. Its mellower and warmer tonal quality distinguishes it from steel-string guitars. Typically used in classical, flamenco, and bossa nova music, the classical guitar employs fingerpicking techniques and relies heavily on nuanced finger movements to produce intricate melodies and harmonies. Its smaller body size enhances the instrument's resonance and projection.
            <h1 className='text-3xl text-black flex justify-center p-10'>
            Flamenco Guitar:
            </h1>
            Flamenco guitar, originating from the Andalusian region of Spain, is designed specifically for the fiery and passionate Flamenco music genre. Similar to classical guitars, Flamenco guitars use nylon strings, but they often feature a lighter build and a tap plate (golpeador) to withstand percussive techniques such as tapping and strumming. Known for its percussive rhythms and rapid passages, the Flamenco guitar's bright and crisp tones contribute to the expressive and rhythmic nature of Flamenco music.

            Each type of guitar has its unique characteristics, catering to different playing styles, musical genres, and cultural traditions. While Western guitars cater to a broader range of music styles, classical and Flamenco guitars are more specialized, reflecting the nuances and demands of their respective musical genres.

            Understanding the distinctions between Western, Classical, and Flamenco guitars allows musicians to explore diverse playing techniques, musical styles, and cultural expressions, enriching the world of music with their individual tones and characteristics.
            </p>

        </div>    
        </React.Fragment>
    );
}
