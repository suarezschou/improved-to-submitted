import Link from "next/link";
import Category from "./category";

export default function CategoryList({categories}){
    if(!categories) return null;

    return(
        <ul className="bg-primary text-2xl grid justify-items-center p-10 gap-4 grid-cols-2 text-primary">
            {categories.map((category) =>(
                <li key={category.slug}>
                    <Link legacyBehavior href={`/categories/${category.slug}`}>
                        <a>
                            <Category {...category} />
                        </a>
                    </Link>   
                </li>
            ))}
        </ul>
    );
}