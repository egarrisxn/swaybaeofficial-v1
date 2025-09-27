"use client";
import { useState } from "react";
import FeaturedCard from "./featured-card";
import LatestCard from "./latest-card";

export function AllPosts({ posts }) {
  const featuredPosts = posts.filter((post) => post.featured);
  const remainingPosts = posts.filter((post) => !post.featured);

  const articlesShown = 3;
  const [loadMore, setLoadMore] = useState(articlesShown);

  const showMoreArticles = () => {
    setLoadMore(loadMore + 3);
  };

  return (
    <>
      <h2 className="mb-2 ml-1 text-xl font-bold">Featured Posts</h2>
      {featuredPosts.length > 0 && (
        <section className="mt-8 grid grid-cols-1 gap-16 pb-16">
          {featuredPosts.map((post) => (
            <div key={post._id}>
              <FeaturedCard post={post} />
            </div>
          ))}
        </section>
      )}
      <hr className="mb-8 mt-4 w-full rounded-lg border border-gray-fade" />
      <h2 className="mb-4 ml-1 text-xl font-bold">Latest Posts</h2>
      <section className="mt-8 grid grid-cols-1 gap-16 pb-12 md:grid-cols-2 xl:grid-cols-3">
        {[...featuredPosts, ...remainingPosts]
          .slice(0, loadMore)
          .map((post) => (
            <div key={post._id}>
              <LatestCard post={post} />
            </div>
          ))}
      </section>
      {posts.length > loadMore && (
        <div className="flex justify-center pb-12 pt-4">
          <button
            type="button"
            onClick={showMoreArticles}
            className="relative inline-flex h-10 cursor-pointer appearance-none items-center justify-center overflow-hidden whitespace-nowrap rounded-lg border-2 bg-light-fade px-12 shadow-soft transition-transform duration-500 ease-in-out before:absolute before:inset-0 before:z-[-1] before:translate-x-full before:bg-gradient-to-r before:from-primary-tint before:to-primary-fade before:duration-500 hover:scale-105 hover:shadow-hard hover:before:-translate-x-0 focus-visible:outline-none focus-visible:ring-0 active:scale-100 disabled:pointer-events-none disabled:opacity-50 2xl:text-base 3xl:text-lg dark:bg-dark-fade"
          >
            Load more posts
          </button>
        </div>
      )}
    </>
  );
}
