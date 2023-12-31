import commerce from "../lib/commerce";
import CategoryList from "../components/categoryList";
import React from "react";


export async function getStaticProps() {
    const { data:categories }= await commerce.categories.list();

    return{
        props: {
            categories,
        },
    };
}

export default function CategoriesPage({ categories }) {
    return (
        <React.Fragment>
            <h1 className="bg-primary text-3xl text-black flex justify-center p-10"> Categories </h1>

            <CategoryList categories={categories} />
        </React.Fragment>
    );
}