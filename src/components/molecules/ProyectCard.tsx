// src/components/molecules/ProjectCard.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  slug: string;
  title: string;
  imageUrl: string;
  tags: string[];
};

export const ProjectCard = ({ slug, title, imageUrl, tags }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Link href={`/portfolio/${slug}`} className="block overflow-hidden rounded-lg shadow-lg bg-gray-800">
        <Image
          src={imageUrl}
          alt={`Imagen del proyecto ${title}`}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs font-semibold text-cyan-300 bg-cyan-900/50 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
