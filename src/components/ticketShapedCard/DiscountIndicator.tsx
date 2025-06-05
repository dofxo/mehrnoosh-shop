const DiscountIndicator = ({
  position,
  primaryColor,
}: {
  position: string;
  primaryColor: string;
}) => {
  return (
    <div
      className="bottom-right-border absolute right-[-1.5px] top-[115px] h-[35px] w-[5px] rounded-[20px] lg:bottom-[20px]"
      style={{
        backgroundColor: position === "top" ? primaryColor : "#fff",
        boxShadow: `0px 5px 15px ${primaryColor}`,
      }}
    />
  );
};

export default DiscountIndicator;
