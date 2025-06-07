import DeliveryForm from "@/components/checkout/DeliveryForm";
import ShoppingItems from "@/components/checkout/ShoppingItems";

function page() {
  return (
    <div
      className="min-h-screen p-2 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6
    items-stretch
    "
    >
      <div className="bg-white min-h-screen p-3 md:p-10">
        <ShoppingItems />
      </div>
      <DeliveryForm />
    </div>
  );
}

export default page;
