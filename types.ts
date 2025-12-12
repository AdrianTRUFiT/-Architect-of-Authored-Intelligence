import { LucideIcon } from 'lucide-react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface Artifact {
  title: string;
  description?: string;
  icon: LucideIcon;
}

export interface EcosystemNode {
  title: string;
  role: string;
}
