import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { lazy, Suspense } from 'react';

interface DynamicIconProps extends Omit<LucideProps, 'ref'> {
  name: string;
}

const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  // Fallback to a default icon if the name doesn't exist
  const iconName = (name.toLowerCase().replace(/\s+/g, '-') as keyof typeof dynamicIconImports);
  
  if (!dynamicIconImports[iconName]) {
    // Default fallback icon
    const Sparkles = lazy(dynamicIconImports['sparkles']);
    return (
      <Suspense fallback={<div style={{ width: 24, height: 24 }} />}>
        <Sparkles {...props} />
      </Suspense>
    );
  }

  const LucideIcon = lazy(dynamicIconImports[iconName]);

  return (
    <Suspense fallback={<div style={{ width: 24, height: 24 }} />}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default DynamicIcon;
