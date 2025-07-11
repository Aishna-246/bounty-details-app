import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';
import BountyDetailsCard from '@/components/BountyDetailsCard';
import Tags from '@/components/Tags';
import CommentsSection from '@/components/CommentsSection';

interface BountyData {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  points: number;
  deadline: string;
  issueLink: string;
  tags: string[];
  comments: Array<{
    name: string;
    date: string;
    message: string;
  }>;
}

interface BountyDetailsPageProps {
  bounty: BountyData;
}

const BountyDetailsPage: React.FC<BountyDetailsPageProps> = ({ bounty }) => {
  const breadcrumbItems = [
    { label: 'Bounties', href: '/bounties' },
    { label: 'Bounty Details' }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Head>
        <title>{bounty.title} - Bounty Details</title>
        <meta name="description" content={bounty.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} />
        
        <BountyDetailsCard bounty={bounty} />
        
        <Tags tags={bounty.tags} />
        
        <CommentsSection comments={bounty.comments} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  
  // Mock data - in a real app, this would come from an API or database
  const bounty: BountyData = {
    id: id as string,
    title: "Develop a Machine Learning Model for Image Classification",
    description: "This bounty requires the development of a machine learning model capable of accurately classifying images into predefined categories. The model should be trained on a provided dataset and optimized for performance and accuracy.",
    difficulty: "Intermediate",
    points: 10,
    deadline: "2024-05-15",
    issueLink: "github.com/mlsc-tiet/bounties/issues/1",
    tags: ["Machine Learning", "Image Classification", "Python"],
    comments: [
      {
        name: "Ethan Gerlar",
        date: "2024-04-20",
        message: "Can we use pre-trained models for this task?"
      },
      {
        name: "Sophia Bennett",
        date: "2024-04-21",
        message: "Yes, you are allowed to use pre-trained models. However, make sure to document the source and any modifications you make."
      }
    ]
  };

  return {
    props: {
      bounty,
    },
  };
};

export default BountyDetailsPage;
