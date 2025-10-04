import React from "react";
import { Wrench } from "lucide-react";

const Settings = () => {
  return (
    <div className="grid gap-4 py-8">
      <h1 className="text-2xl text-black font-bold">Settings</h1>
      <Wrench size={36} />
    </div>
  );
};

export default Settings;
