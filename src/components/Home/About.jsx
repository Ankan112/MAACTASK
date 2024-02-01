import aboutImage from "../../assets/aboutImage.png";
import userIcon from "../../assets/userIcon.png";
import monitor from "../../assets/monitor-mobbile.png";
import cup from "../../assets/cup.png";
import people from "../../assets/people.png";
import user from "../../assets/usericons.png";
const About = () => {
  return (
    <div
      className="about-bg"
      style={{
        padding: "72px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "62px",
        }}
      >
        <div>
          <img src={aboutImage} alt="" />
        </div>
        <div>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#0052CC",
              marginBottom: "32px",
            }}
          >
            About Us
          </h3>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#0B141F",
            }}
          >
            A dedicated solution for <br /> startups and enterprises
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              width: "586px",
              marginTop: "32px",
              color: "#4E4E4E",
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <hr
            style={{
              border: "1px solid #F0F0F0",
              margin: "48px 0",
            }}
          />
          <div
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <div>
              <img src={userIcon} alt="" />
            </div>
            <div>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#4E4E4E",
                }}
              >
                Fieldx is for teams that care about <br /> their product growth.
              </p>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#0B141F",
                  marginTop: "16px",
                }}
              >
                CEO, FieldX
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "64px",
          marginBottom: "48px",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div>
            <img src={monitor} alt="" />
          </div>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#0052CC",
              margin: "16px 0",
            }}
          >
            10+
          </h2>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "#4E4E4E",
            }}
          >
            Platforms Created
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div>
            <img src={people} alt="" />
          </div>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#0052CC",
              margin: "16px 0",
            }}
          >
            1559+
          </h2>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "#4E4E4E",
            }}
          >
            Total Users
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div>
            <img src={user} alt="" />
          </div>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#0052CC",
              margin: "16px 0",
            }}
          >
            10+
          </h2>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "#4E4E4E",
            }}
          >
            Total Clients
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div>
            <img src={cup} alt="" />
          </div>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#0052CC",
              margin: "16px 0",
            }}
          >
            300 Days
          </h2>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "#4E4E4E",
            }}
          >
            In Operations
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
