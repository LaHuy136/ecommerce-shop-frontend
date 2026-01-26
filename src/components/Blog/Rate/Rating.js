import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import { getRating, ratingBlog } from "../../../api/blogs";
import { useEffect } from "react";
const { useState } = require("react");

function Rate({ blogId, isLogin, avgRating, rateCount }) {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setRating(Number(avgRating) || 0);
    setCount(Number(rateCount) || 0);
  }, [avgRating, rateCount]);

  const fetchRating = async () => {
    try {
      const response = await getRating();
      const rates = response.data;

      const blogRates = rates.filter((item) => item.blog_id === blogId);

      const count = blogRates.length;
      const total = blogRates.reduce((sum, item) => sum + item.rating, 0);
      const avg = count > 0 ? total / count : 0;

      setRating(avg);
      setCount(count);
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        switch (status) {
          case 404:
            toast.warning("Fetch rating failed");
            break;

          default:
            toast.error(data?.message || "Fetch rating rate blog error");
            console.error("Fetch rating blog error:", error.response);
            break;
        }
      } else {
        toast.error("Network error, please check your connection");
      }
    }
  };

  useEffect(() => {
    fetchRating();
  }, [blogId]);

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

      fetchRating();
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
