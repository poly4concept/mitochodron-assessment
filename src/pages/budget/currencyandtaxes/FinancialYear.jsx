import DateInput from "../../../components/input/DateInput";

const FinancialYear = () => {
  return (
    <div className="flex items-center border-b-[1px] px-6 py-4 gap-x-6">
      <p className="font-medium text-xl">Financial Year</p>

      <div className="flex items-center gap-3">
        <span className="text-lg font-medium">Start</span>
        <DateInput />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-lg font-medium">End</span>
        <DateInput />
      </div>
    </div>
  );
};

export default FinancialYear;
