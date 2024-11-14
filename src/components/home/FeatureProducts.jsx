import ProductCard from "./ProductCard";

const FeatureProducts = () => {
    return (
        <div className="flex items-center justify-between gap-6">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
};

export default FeatureProducts;