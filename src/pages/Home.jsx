import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import FeatureProducts from "../components/home/FeatureProducts";
import UserReview from "../components/home/UserReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <div className="my-8">
          <h1 className="mb-16 text-2xl font-bold text-center">
            Feature Products
          </h1>
          <FeatureProducts />
        </div>

        <div className="my-8">
          <h1 className="mb-16 text-2xl font-bold text-center">User Review</h1>
          <UserReview />
        </div>

        <div className="my-8">
          <h1 className="mb-16 text-2xl font-bold text-center">
            Frequently Asked Questions
          </h1>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Home;
