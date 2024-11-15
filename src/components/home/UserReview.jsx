import ReviewCard from "./ReviewCard";

const UserReview = () => {
    return (
        <div className="flex items-center justify-between gap-6">
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
        </div>
    );
};

export default UserReview;