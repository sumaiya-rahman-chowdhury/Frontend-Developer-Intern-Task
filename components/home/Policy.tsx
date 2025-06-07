import PolicyCard from "../ui/cards/PolicyCard";
import { policies } from "@/data/policies";

export default function PolicySection() {
//   const policies = [
//     {
//       icon: <FaExchangeAlt />,
//       title: "Easy Exchange Policy",
//       description: "We offer hassle-free exchange policy",
//     },
//     {
//       icon: <MdOutlineVerifiedUser />,
//       title: "3 Days Return Policy",
//       description: "We provide 3 days free return policy",
//     },
//     {
//       icon: <FaHeadset />,
//       title: "Best customer support",
//       description: "We provide 24/7 customer support",
//     },
//   ];

  return (
    <section className="bg-pink-200 py-10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center gap-10">
        {policies.map((policy, index) => (
          <PolicyCard
            key={index}
            icon={policy.icon}
            title={policy.title}
            description={policy.description}
          />
        ))}
      </div>
    </section>
  );
}
