// components/about/WhyChooseUs.tsx
type Feature = {
  title: string;
  description: string;
};

type WhyChooseUsProps = {
  features: Feature[];
};

export default function WhyChooseUs({ features }: WhyChooseUsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pt-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="rounded-md shadow border border-gray-200 p-20"
        >
          <h4 className="font-bold mb-4">{feature.title}</h4>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
