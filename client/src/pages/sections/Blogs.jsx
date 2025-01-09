import React from "react";
import ArticleCard from "../../components/ArticleCard";
import { articlesData as articles } from "../../data/articlesData";

const Blog = () => {

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-8 text-left">
          From Our Blog
        </h2>
        <div className="flex flex-col gap-8">
          {/* Main Article */}
          <div className="w-full lg:w-9/10">
            <ArticleCard {...articles[0]} />
          </div>

          {/* Secondary Articles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
