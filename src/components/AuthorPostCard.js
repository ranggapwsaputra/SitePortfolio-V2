import Image from 'next/image';

export default function AuthorPostCard({ name, image, bio, job }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-xl">
      <div className="w-16 h-16 rounded-full overflow-hidden border border-dark/10 dark:border-light/10">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-dark dark:text-light">{name}</h3>
        {job && <p className="text-sm text-gray-500 dark:text-gray-400">{job}</p>}
        {bio && <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{bio}</p>}
      </div>
    </div>
  );
}
