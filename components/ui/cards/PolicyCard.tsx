type PolicyCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const PolicyCard = ({ icon: Icon, title, description }: PolicyCardProps) => {
  return (
    <div className="text-center flex flex-col items-center gap-2 px-4">
      <Icon className="text-3xl mb-2 text-black" />
      <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default PolicyCard;
