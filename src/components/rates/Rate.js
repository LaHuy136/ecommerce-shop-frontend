import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import { ratingBlog } from "../../api/blogs";
import { useEffect } from "react";
const { useState } = require("react");

function Rate({ blogId, isLogin, avgRating, rateCount }) {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setRating(Number(avgRating) || 0);
    setCount(Number(rateCount) || 0);
  }, [avgRating, rateCount]);

  const handleRating = async (newRating) => {
    if (!isLogin) {
      toast.error("Please login to rate post");
      return;
    }

    try {
      const res = await ratingBlog({
        blog_id: blogId,
        rating: newRating,
      });

      setRating(res.avg);
      setCount(res.count);

      toast.success(res.message);
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        switch (status) {
          case 409:
            toast.warning("You rated this post");
            break;

          default:
            toast.error(data?.message || "Failed to rate blog");
            console.error("Rating blog error:", error.response);
            break;
        }
      } else {
        toast.error("Network error, please check your connection");
      }
    }
  };

  return (
    <div>
      <span className="rating-text"> ({count} rating)</span>
      <StarRatings
        rating={rating}
        starRatedColor="gold"
        changeRating={handleRating}
        numberOfStars={5}
        name={`rating-${blogId}`}
      />
    </div>
  );
}

export default Rate;
