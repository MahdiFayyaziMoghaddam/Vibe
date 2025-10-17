import { memo, useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface ILike {
  className?: string;
  onClick?: () => void;
  favored?: boolean;
  locked?: boolean;
}

const Like = memo(({ 
  className = "",
  onClick = () => null,
  favored = false,
  locked = false,
}: ILike) => {
  const [isHeartFilled, setIsHeartFilled] = useState(favored);

  return (
    <div
      className={`
        relative
        transition-transform
        duration-200
        hover:scale-110
        ${!locked ? "cursor-pointer" : "cursor-not-allowed"}
        ${className}
      `}
      onClick={() => {
        if (!locked) {
          setIsHeartFilled((prev) => !prev);
          onClick();
        }
      }}
    >
      <div
        className={`
          absolute
          transition-all
          duration-300
          ${isHeartFilled ? "scale-100 opacity-100" : "scale-0 opacity-0"}
          text-primary
        `}
      >
        <IoMdHeart />
      </div>
      <div
        className={`
          transition-all
          duration-300
          ${isHeartFilled ? "scale-0 opacity-0" : "scale-100 opacity-100"}
          text-dark-300
        `}
      >
        <IoMdHeartEmpty />
      </div>
    </div>
  );
});

Like.displayName = "Like";

export default Like;