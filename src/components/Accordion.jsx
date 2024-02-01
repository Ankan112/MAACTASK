import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
const Accordion = () => {
  const accordionData = [
    {
      title: "What kind of data can I see in FieldX?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
    },
    {
      title: "How do you take payments?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
    },
    {
      title: "Can I also track website analytics on fieldX?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
    },
    {
      title: "Does Bizzy read my customers' data?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
    },
    {
      title: "What makes Bizzy different from other analytics tools?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
    },
    {
      title: "What's your refund and cancellation policy?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "10px",
        padding: "0 80px",
        marginTop: "80px",
      }}
    >
      {accordionData.map((item, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            padding: "24px",
            background: "#fff",
            borderRadius: "14px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => toggleAccordion(index)}
          >
            <span style={{ fontWeight: "bold" }}>{item.title}</span>
            <span
              style={{
                transform:
                  openAccordion === index ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            >
              <RightOutlined />
            </span>
          </div>
          {openAccordion === index && (
            <div style={{ marginTop: "10px" }}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
