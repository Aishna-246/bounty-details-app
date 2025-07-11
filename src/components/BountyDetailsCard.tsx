import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

interface BountyData {
  title: string;
  description: string;
  difficulty: string;
  points: number;
  deadline: string;
  issueLink: string;
}

interface BountyDetailsCardProps {
  bounty: BountyData;
}

const BountyDetailsCard: React.FC<BountyDetailsCardProps> = ({ bounty }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-6">
      <h1 className="text-2xl font-bold text-white mb-4">{bounty.title}</h1>
      <p className="text-gray-300 mb-6 leading-relaxed">{bounty.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-200 mb-2">Difficulty</h3>
          <p className="text-gray-300">{bounty.difficulty}</p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-200 mb-2">Points</h3>
          <p className="text-gray-300">{bounty.points}</p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-200 mb-2">Deadline</h3>
          <div className="flex items-center space-x-2 text-gray-300">
            <Calendar className="w-4 h-4" />
            <span>{bounty.deadline}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-200 mb-2">Issue Link</h3>
        <a
          href={bounty.issueLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1"
        >
          <span>{bounty.issueLink}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
        Submit Solution
      </button>
    </div>
  );
};

export default BountyDetailsCard;
