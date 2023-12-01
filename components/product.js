export default function Product({name, price}){
    return (
        <>
        <p className="text-primary">
            {name}:
        </p>
        <p>{price.formatted_with_symbol}</p>
        </>
    );
}