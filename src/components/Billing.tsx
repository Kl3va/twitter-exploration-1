import React from "react";
import { Receipt } from "lucide-react";

const Billing = () => {
  return (
    <div className="grid gap-4 py-8">
      <h1 className="text-2xl text-black font-bold">Billing & Usage</h1>
      <Receipt size={36} />
    </div>
  );
};

export default Billing;
