import partner1 from "../../assets/Aven.png";
import partner2 from "../../assets/Amara.png";
import partner3 from "../../assets/Circle.png";
import partner4 from "../../assets/Treva.png";
import partner5 from "../../assets/Kyan.png";
const Partners = () => {
  return (
    <div
      style={{
        padding: "132px 0",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: 600,
          color: "#0052CC",
          textAlign: "center",
        }}
      >
        5,000+ high-impact teams rely on Fieldx
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "88px",
          marginTop: "62px",
        }}
      >
        <div>
          <img src={partner1} alt="" />
        </div>
        <div>
          <img src={partner2} alt="" />
        </div>
        <div>
          <img src={partner3} alt="" />
        </div>
        <div>
          <img src={partner5} alt="" />
        </div>
        <div>
          <img src={partner4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
