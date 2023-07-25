import { FC } from 'react';

type SkillListProps = {
  title: string;
  skills: string[];
};
const SkillList: FC<SkillListProps> = ({ title, skills }) => {
  return (
    <article>
      <h5 className="mb-4">{title}</h5>
      <div className="d-flex flex-row flex-wrap gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-body-secondary bg-opacity-75 px-4 py-2 rounded">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
};
export default SkillList;
