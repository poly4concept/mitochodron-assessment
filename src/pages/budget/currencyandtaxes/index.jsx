import CurrencyConverter from "./CurrencyConverter";
import CurrencyForm from "./CurrencyForm";
import FinancialYear from "./FinancialYear";

const CurrencyAndTaxes = () => {
  return (
    <div className="">
      <FinancialYear />

      <div className="w-full flex gap-[2%] px-6 py-4">
        <div className=" w-[51%]">
          <CurrencyForm />
        </div>
        <div className="w-[47%]">
          <CurrencyConverter />
        </div>
      </div>
    </div>
  );
};

export default CurrencyAndTaxes;
