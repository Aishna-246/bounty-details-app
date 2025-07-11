import React from 'react';

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-200 mb-3">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tags;
