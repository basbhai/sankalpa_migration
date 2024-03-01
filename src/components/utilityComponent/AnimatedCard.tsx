import React from "react";

interface Props {
  src: string;
  alt: string;
  desc: string;
  title: string;
  tags: string[];
}

const AnimatedCard: React.FC<Props> = ({ src, alt, desc, title, tags }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={src} alt={alt} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag, index) => (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
