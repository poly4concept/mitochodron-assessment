import { IoCreateOutline } from "react-icons/io5";
import TextInput from "../../../components/input/TextInput";
import NGNFlag from "../../../assets/ngn.png";

const CurrencyForm = () => {
  return (
    <div className="flex flex-col border-outline border-[1px] rounded-3xl">
      <p className="p-6 pb-4 font-medium text-xl">Currency</p>

      <div className="border-y-[1px] p-6 pb-10 w-full">
        <div className="flex items-center justify-between gap-4 mb-6">
          <p className="text-lg font-medium">Principal Currency</p>
          <p className="text-sm font-medium bg-[#C5FCD6] p-3 text-center rounded-lg">
            Basic User
          </p>
        </div>

        <TextInput
          placeholder="Naira"
          name="naira"
          isCurrency
          icon={NGNFlag}
          currency="NGN"
        />

        <TextInput
          label="Tax type"
          placeholder="Value Added Tax (VAT)"
          name="tax"
        />

        <div className="grid md:grid-cols-2 gap-4 w-full mt-4">
          <TextInput
            label="Tax rate"
            placeholder="fixed amount"
            name="tax-rate"
          />
          <TextInput
            label="Tax rate unit"
            placeholder="30.00"
            name="tax-rate-unit"
          />
        </div>
      </div>

      <button className="my-6 self-center bg-[#00361D] w-[80%] text-white flex items-center justify-center py-4 rounded-xl gap-2">
        <IoCreateOutline size={20} />
        Edit Overview
      </button>
    </div>
  );
};

export default CurrencyForm;
