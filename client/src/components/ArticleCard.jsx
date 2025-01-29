import React from "react";
import { FaCalendarAlt, FaUser, FaRegCommentDots } from "react-icons/fa";
import useRedirect from "./useRedirect";

const ArticleCard = ({ title, excerpt, image, isMain, date, author, comments }) => {
  const redirectTo = useRedirect()

  return (
    <div
      className={`flex flex-col ${
        isMain ? "lg:flex-row lg:gap-8 bg-transparent pb-4 sm:pb-0 sm:p-12 transition duration-300 shadow-lg rounded-[50px]" : "bg-blue-400 rounded-lg"
      } overflow-hidden cursor-pointer`}
      onClick={() => redirectTo("/blog-article-placeholder")}
    >
      <img
        src={image}
        alt={title}
        className={`${isMain ? "lg:w-2/5" : "w-full"} object-cover`}
      />
      <div className="p-6 flex flex-col justify-between items-start">
        <div>
          <h3 className={`text-lg ${isMain ? "lg:text-2xl text-blue-600" : "text-xl text-white"} font-bold mb-4`}>
            {title}
          </h3>
          <p className={`text-sm mb-4 ${isMain ? "text-gray-800" : "text-gray-200"}`}>{excerpt}</p>
        </div>
        <div className={`mt-auto flex justify-between items-center gap-3 ${isMain ? "text-blue-600 sm:gap-6" : "text-white sm:gap-4"}`}>
          <div className="flex items-center gap-2 text-[8px] sm:text-xs">
            <FaCalendarAlt /> <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-[8px] sm:text-xs">
            <FaUser /> <span>{author}</span>
          </div>
          <div className="flex items-center gap-2 text-[8px] xs:text-[9px] sm:text-xs">
            <FaRegCommentDots /> <span>{comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
