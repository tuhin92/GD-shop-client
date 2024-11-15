import ReviewCard from "./ReviewCard";

const UserReview = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
        </div>
    );
};

export default UserReview;