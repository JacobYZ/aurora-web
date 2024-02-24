interface ExperienceProps {
  experience: {
    jobTitle: string;
    jobDescription: string;
    jobDate: string;
    company: string;
    position: string;
  };
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => (
  <div className="flex justify-between h-48">
    <div className="w-1/3">
      {experience.position === "left" && (
        <>
          <div className="bg-black p-3 font-semibold rounded-b-lg rounded-s-lg">
            {experience.jobTitle}
          </div>
          <div className="p-3 text-sm italic">{experience.jobDescription}</div>
          <div className="p-3 text-red-400 text-sm font-semibold">
            {experience.jobDate}
          </div>
          <div className="p-1 rounded bg-black text-sm font-semibold w-fit">
            {experience.company}
          </div>
        </>
      )}
    </div>
    <div className="w-1/6 flex justify-center">
      <div className="w-1 h-full bg-gray-300 rouned relative">
        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-black -left-2"></div>
      </div>
    </div>
    <div className="w-1/3">
      {experience.position === "right" && (
        <>
          <div className="bg-black p-3 font-semibold rounded-b-lg rounded-e-lg">
            {experience.jobTitle}
          </div>
          <div className="p-3 text-sm italic">{experience.jobDescription}</div>
          <div className="p-3 text-red-400 text-sm font-semibold">
            {experience.jobDate}
          </div>
          <div className="p-1 rounded bg-black text-sm font-semibold w-fit">
            {experience.company}
          </div>
        </>
      )}
    </div>
  </div>
);

export default Experience;