import ProductCard from "./ProductCard";

const FeatureProducts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
};

export default FeatureProducts;