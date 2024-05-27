const CustomBGImage = () => {
  return (
    <div>
      <div style={bgOrangeStyle}></div>
      <div style={bgBlackStyle}></div>
      <div style={bgBlack1Style}></div>
      <div style={bgBlack2Style}></div>
    </div>
  );
};

export default CustomBGImage;

const bgOrangeStyle = {
  zIndex: "1",
  width: "0px",
  height: "0px",
  top: "21.6vw",
  borderTop: "45vw solid transparent",
  borderRight: "100vw solid #FF7A00",
  position: "absolute",
  left: "0",
};

const bgBlackStyle = {
  zIndex: "2",
  width: "0px",
  height: "0px",
  top: "21.6vw",
  borderTop: "45vw solid transparent",
  borderLeft: "100vw solid black",
  position: "absolute",
};

const bgBlack1Style = {
  zIndex: "0",
  width: "0px",
  height: "0px",
  borderBottom: "21.6vw solid transparent",
  borderLeft: "50vw solid black",
  position: "absolute",
};

const bgBlack2Style = {
  zIndex: "0",
  width: "0px",
  height: "0px",
  left: "50vw",
  borderBottom: "21.6vw solid transparent",
  borderRight: "50vw solid black",
  position: "absolute",
};
