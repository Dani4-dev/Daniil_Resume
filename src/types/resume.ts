export interface Project {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  isInDevelopment?: boolean;
  link?: string;
  github?: string;
}

export interface Experience {
  company: string;
  position: string; // Используем для отдела
  title: string;    // Используем для названия должности
  duration: string;
  location?: string; // Добавляем новое поле для локации
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  location?: string;
  description?: string;
  degreeTitle?: string;
  isCurrent?: boolean;
}

export interface Certification {
  id?: string;
  title: string;
  issuer?: string;
  date: string;
}
