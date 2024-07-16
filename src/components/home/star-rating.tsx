import { useEffect, useState } from "react";

const StarRating = ({
  value,
  totalStars,
}: {
  value: number;
  totalStars: number;
}) => {
  const [stars, setStars] = useState(Array(totalStars).fill(false));

  useEffect(() => {
    setStars((prevStars) =>
      prevStars.map((_, index) => (index < value ? true : false))
    );
  }, [value]);

  return (
    <div className="flex">
      {stars.map((filled, index) => (
        <span key={index}>
          {filled ? (
            <img
              height={24}
              width={24}
              src="/images/star.png"
              className="max-[800px]:w-[16px]"
            />
          ) : (
            <img
              height={24}
              width={24}
              src="/images/empty_star.png"
              className="max-[800px]:w-[16px]"
            />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
