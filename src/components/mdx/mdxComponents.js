import StackIcon from '@/components/StackIcon';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMdx, SiFramer } from 'react-icons/si';
import ImageWithCaption from './ImageWithCaption';
import Callout from './Callout';


export function ReactStackIcon() {
  return <StackIcon icon={<FaReact />} label="React.js" />;
}

export function NextStackIcon() {
  return <StackIcon icon={<SiNextdotjs />} label="Next.js" />;
}

export function TailwindStackIcon() {
  return <StackIcon icon={<SiTailwindcss />} label="TailwindCSS" />;
}

export function MdxStackIcon() {
  return <StackIcon icon={<SiMdx />} label="MDX" />;
}

export function MotionStackIcon() {
  return <StackIcon icon={<SiFramer />} label="Motion.dev" />;
}

const MDXComponents = {
  ReactStackIcon,
  NextStackIcon,
  TailwindStackIcon,
  MdxStackIcon,
  MotionStackIcon,
  StackIcon,
  ImageWithCaption, 
  Callout,       
  FaReact,
  SiFramer,
  SiMdx,
  SiNextdotjs,
  SiTailwindcss,
};

export default MDXComponents;
