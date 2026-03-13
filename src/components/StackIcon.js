import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMdx, SiFramer } from 'react-icons/si';

const iconMap = {
  react: <FaReact />,
  next: <SiNextdotjs />,
  tailwind: <SiTailwindcss />,
  mdx: <SiMdx />,
  motion: <SiFramer />,
};

export default function StackIcon({ icon, label }) {
  const selectedIcon = iconMap[icon.toLowerCase()];

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="text-3xl text-black dark:text-white">{selectedIcon}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}
