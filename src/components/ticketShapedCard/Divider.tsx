const Divider = ({ bgColor }: { bgColor: string }) => {
  return (
    <div className="divier absolute bottom-0 right-[40%] top-0 w-[50px]">
      <div
        className="absolute top-[-25px] z-10 h-[50px] w-[50px] rounded-[50%]"
        style={{ backgroundColor: bgColor }}
      />
      <div
        className="absolute bottom-[-25px] z-10 h-[50px] w-[50px] rounded-[50%]"
        style={{ backgroundColor: bgColor }}
      />
      <div className="absolute bottom-0 left-0 top-0 w-[25px] border-r border-dashed" />
    </div>
  );
};

export default Divider;
