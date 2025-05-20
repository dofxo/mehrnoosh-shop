const DiscountIndicator = ({
  position,
  primaryColor,
}: {
  position: string;
  primaryColor: string;
}) => {
  return (
    <div
      className="bottom-right-border absolute bottom-[20px] right-[-1.5px] h-[35px] w-[5px] rounded-[20px]"
      style={{
        backgroundColor: position === "top" ? primaryColor : "#fff",
        boxShadow: `0px 5px 15px ${primaryColor}`,
      }}
    />
  );
};

export default DiscountIndicator;
