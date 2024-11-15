import Image from 'next/image';
import Card from '@/components/base/Card';
import type { AboutMeItem } from '@/types/bento';

export default function AboutCard({ title, description, image, socials }: AboutMeItem) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        {image && (
          <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        
        {socials && (
          <div className="flex gap-4 justify-center">
            {socials.github && (
              <a href={socials.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {/* Add other social links similarly */}
          </div>
        )}
      </div>
    </Card>
  );
} 