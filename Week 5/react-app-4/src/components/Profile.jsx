// components/Profile.js
import React from 'react';

function Profile({ profile }) {
  const { title, description, image, author, date, authorImage } = profile;

  return (
    <article className="group bg-[#fff] dark:bg-[#16171d] rounded-xl border border-[#e5e4e7] dark:border-[#2e303a] overflow-hidden hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.4),0_4px_6px_-2px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden bg-[#f4f3ec] dark:bg-[#1f2028]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="-mt-10 mb-4">
          <img 
            src={authorImage} 
            alt={author} 
            className="w-12 h-12 rounded-full border-4 border-[#fff] dark:border-[#16171d] shadow-sm"
          />
        </div>

        <h2 className="text-[20px] md:text-[24px] font-medium text-[#08060d] dark:text-[#f3f4f6] leading-[1.18] tracking-[-0.24px] mb-3">
          {title}
        </h2>

        <p className="text-[15px] leading-[1.45] text-[#6b6375] dark:text-[#9ca3af] mb-6 flex-1">
          {description}
        </p>

        <div className="pt-4 border-t border-[#e5e4e7] dark:border-[#2e303a] flex justify-between items-center text-[14px]">
          <span className="font-medium text-[#08060d] dark:text-[#f3f4f6]">
            {author}
          </span>
          <span className="text-[#6b6375] dark:text-[#9ca3af]">
            {date}
          </span>
        </div>
      </div>
    </article>
  );
}

export default Profile;