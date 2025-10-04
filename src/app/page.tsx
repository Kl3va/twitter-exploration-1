"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import Manage from "@/components/Manage";
import Billing from "@/components/Billing";

export default function Home() {
  const [activeTab, setActiveTab] = useState(3);

  const activateTab = (id: number) => {
    setActiveTab(id);
  };

  const renderTab = () => {
    switch (activeTab) {
      case 1:
        return <Settings />;
      case 2:
        return <Billing />;
      case 3:
        return <Manage />;

      default:
        return <Manage />;
    }
  };

  return (
    <main className="w-full">
      <Navbar activeTab={activeTab} activateTab={activateTab} />
      <div className="w-[min(90%,37rem)] mx-auto">{renderTab()}</div>
    </main>
  );
}
