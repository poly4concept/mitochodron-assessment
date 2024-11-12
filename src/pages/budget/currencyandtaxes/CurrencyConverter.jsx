import TextInput from "../../../components/input/TextInput";
import NGNFlag from "../../../assets/ngn.png";
import USDFlag from "../../../assets/usd.png";

const CurrencyConverter = () => {
  return (
    <div className="flex flex-col border-outline border-[1px] rounded-3xl">
      <p className="p-6 pb-4 font-medium text-xl">Conversion rate</p>

      <div className="border-t-[1px] p-6 w-full flex flex-col gap-4">
        <TextInput
          placeholder="100,000"
          name="naira"
          isCurrency
          icon={NGNFlag}
          currency="NGN"
        />
        <TextInput
          placeholder="60,8142"
          name="dollar"
          isCurrency
          icon={USDFlag}
          currency="NGN"
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
