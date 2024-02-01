import tablet from "../../assets/tablet1.png";
import phone from "../../assets/phone.png";
const DeviceAnalytics = () => {
  return (
    <>
      <div
        style={{
          marginTop: "-300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginBottom: "175px",
        }}
      >
        <div>
          <img src={tablet} alt="" />
        </div>
        <div
          style={{
            position: "absolute",
            right: 250,
            bottom: -110,
          }}
        >
          <img src={phone} alt="" />
        </div>
      </div>
      <hr style={{ border: "1px solid #E1E1E1" }} />
    </>
  );
};

export default DeviceAnalytics;
