import Banner from "../components/home/Banner";
import FeatureProducts from "../components/home/FeatureProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-8">
        <h1 className="mb-16 text-2xl font-bold text-center">Feature Products</h1>
        <FeatureProducts />
      </div>
    </div>
  );
};

export default Home;
