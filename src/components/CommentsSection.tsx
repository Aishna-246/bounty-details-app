import React from 'react';
import { User } from 'lucide-react';

interface Comment {
  name: string;
  date: string;
  message: string;
}

interface CommentsSectionProps {
  comments: Comment[];
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  return (
    <section>
      <h3 className="text-lg font-semibold text-gray-200 mb-4">Comments</h3>
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <User className="w-5 h-5 text-gray-400" />
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-gray-200">{comment.name}</span> on {comment.date}
              </p>
            </div>
            <p className="text-gray-300 text-sm">{comment.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentsSection;

