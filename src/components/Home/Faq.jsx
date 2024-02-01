import Accordion from "../Accordion";

const Faq = () => {
  return (
    <div
      style={{
        // height: "40vh",
        padding: "112px 0",
      }}
      className="faq-bg"
    >
      <div
        style={{
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <h5
          style={{
            fontSize: "20px",
            fontWeight: 500,
            marginBottom: "36px",
          }}
        >
          Common Question{" "}
        </h5>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 700,
          }}
        >
          Frequently asked questions
        </h1>
      </div>
      <div>
        <Accordion />
      </div>
    </div>
  );
};

export default Faq;
