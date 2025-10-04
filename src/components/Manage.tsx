"use client";
import React, { useState, useRef, useEffect } from "react";
import { CircleCheck, Check, TriangleAlert, ChevronRight } from "lucide-react";
import { currentPlan, upgradePlan } from "@/data";

const Manage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLElement>,
    index: number
  ) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        const nextIndex = (index + 1) % upgradePlan.length;
        setCurrentIndex(nextIndex);
        cardRefs.current[nextIndex]?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        const prevIndex = index === 0 ? upgradePlan.length - 1 : index - 1;
        setCurrentIndex(prevIndex);
        cardRefs.current[prevIndex]?.focus();
        break;
    }
  };

  useEffect(() => {
    if (cardRefs.current[0]) {
      cardRefs.current[0].focus();
    }
  }, []);

  return (
    <div className="py-8">
      <h1 className="text-2xl text-black font-bold mb-5">Manage Plan</h1>
      <div>
        <div className="mb-10">
          <h2 className="mb-2 text-sm text-gray-400 font-medium">
            CURRENT PLAN
          </h2>
          <div className="upgrade_plan">
            <div className="grid gap-0.5">
              <h3 className="text-base text-black font-medium">
                {currentPlan.name}
              </h3>
              <p className="text-gray-400">{currentPlan.description}</p>
            </div>
            <span className="px-2.5 py-1.5 w-22 rounded-lg self-center bg-gray-100 flex items-center justify-between text-sm">
              <p className="text-indigo-300">{currentPlan.status}</p>
              <CircleCheck
                size={16}
                className="text-white"
                fill="oklch(78.5% 0.115 274.713)"
              />
            </span>
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-sm text-gray-400 font-medium">
            UPGRADE PLAN
          </h2>
          <div>
            {upgradePlan.map((plan, index) => {
              return (
                <div
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={0}
                  key={plan.id}
                  className={`w-full grid hover:border-indigo-300 gap-5 p-3 cursor-pointer rounded-xl bg-white border border-gray-300 mb-5 ${
                    currentIndex === index && "border-indigo-300"
                  }`}
                >
                  <div className="flex flex-row justify-between">
                    <div className="grid gap-0.5">
                      <h3>{plan.name}</h3>
                      <p>{plan.description}</p>
                    </div>
                    <div className="flex gap-4 self-center items-center">
                      <p>{plan.price}</p>
                      <button className="cursor-pointer px-2.5 py-1.5 rounded-lg bg-inherit border border-gray-300 text-sm">
                        {plan.status}
                      </button>
                    </div>
                  </div>
                  {plan.features && (
                    <div>
                      {plan.isEnterprise && (
                        <h3 className="text-indigo-300 mb-5">
                          Everything included in Pro, plus:
                        </h3>
                      )}
                      {plan.features.map((feature, index) => {
                        return (
                          <span
                            key={index}
                            className="flex gap-2 px-1 items-center"
                          >
                            <Check
                              size={12}
                              strokeWidth={4}
                              className="text-indigo-400"
                            />
                            <p className="text-gray-600">{feature}</p>
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="flex p-3 gap-2 items-center mt-9 cursor-pointer rounded-xl bg-white border border-gray-300">
              <TriangleAlert
                fill="oklch(70.4% 0.191 22.216) "
                className="text-white"
                size={16}
              />
              <p className="text-red-400">Cancel subscription</p>
              <ChevronRight className="ml-auto text-gray-400" size={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
