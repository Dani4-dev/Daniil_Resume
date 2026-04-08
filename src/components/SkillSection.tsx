import type { SkillGroup } from '../types/resume';

export const SkillSection = ({ group }: { group: SkillGroup }) => {
  return (
    <div className="text-left space-y-3">
      <h3 className="text-lg font-semibold text-(--text-h) opacity-70">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((skill) => (
          <span 
            key={skill}
            className="px-4 py-2 rounded-xl bg-(--accent-bg) text-(--accent) border border-(--accent-border) font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
