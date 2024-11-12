import { useState } from "react";
import CurrencyAndTaxes from "./currencyandtaxes";

const tabs = [
  { id: 1, name: "Currency and Taxes" },
  { id: 2, name: "Budget line" },
  { id: 3, name: "Budget room center" },
  { id: 4, name: "Budget control" },
];
const Budget = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex items-center border-b-[1px] gap-x-4 pt-4 px-10 border-outline">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 font-medium text-lg px-2 border-black ${
              activeTab.id === tab.id ? "border-b-4" : ""
            }  `}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {activeTab.id === 1 && <CurrencyAndTaxes />}
      {activeTab.id === 2 && <div className="text-center">Budget Line</div>}
      {activeTab.id === 3 && (
        <div className="text-center">Budget Room Center</div>
      )}
      {activeTab.id === 4 && <div className="text-center">Budget Control</div>}
    </div>
  );
};

export default Budget;
