const TextInput = ({
  label,
  name,
  placeholder,
  isCurrency,
  icon,
  currency,
}) => {
  return (
    <div className="w-full relative flex flex-col items-start">
      <label className="text-lg font-medium mb-3" htmlFor={name}>
        {label}
      </label>
      {isCurrency && (
        <div className="absolute top-5 left-[5%] gap-1 flex items-center">
          <img src={icon} className="w-[45px] h-[30px]" alt="currency" />
          <span className="font-medium">{currency}</span>
        </div>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={`bg-[#EDEEEA] py-3 px-8 text-primary-black text-base placeholder:font-normal font-medium rounded-xl w-full ${
          isCurrency ? "pl-[32%]" : ""
        }`}
      />
    </div>
  );
};

export default TextInput;
