import logo from "../../assets/FieldXFooter.svg";
const Footer = () => {
  return (
    <div
      className="main-container"
      style={{
        background: "#00193D",
        textAlign: "center",
      }}
    >
      <div style={{ paddingTop: "88px" }}>
        <img src={logo} alt="Logo" />
      </div>
      <p
        style={{
          width: "516px",
          color: "#FFF",
          textAlign: "center",
          fontFamily: "Manrope",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "150%",
          margin: "0 auto",
          paddingTop: "32px",
        }}
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          justifyContent: "center",
          padding: "32px 0 88px",
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clipPath="url(#clip0_12_1594)">
              <path
                d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM29.1318 15.5939C29.1406 15.7907 29.1449 15.9885 29.1449 16.1871C29.1449 22.2531 24.5276 29.248 16.0837 29.2484H16.084H16.0837C13.4912 29.2484 11.0788 28.4885 9.04724 27.1863C9.40643 27.2287 9.77203 27.2498 10.1422 27.2498C12.2931 27.2498 14.2725 26.5161 15.8438 25.2847C13.8342 25.2475 12.1399 23.9203 11.5552 22.0963C11.835 22.15 12.1228 22.1793 12.4179 22.1793C12.8369 22.1793 13.2428 22.1228 13.6285 22.0175C11.528 21.597 9.94568 19.7406 9.94568 17.5177C9.94568 17.4969 9.94568 17.4783 9.94629 17.4591C10.5649 17.803 11.2723 18.0099 12.0255 18.0331C10.7928 17.2107 9.9826 15.8047 9.9826 14.212C9.9826 13.371 10.21 12.583 10.6042 11.9046C12.868 14.6823 16.2512 16.5091 20.0665 16.701C19.9878 16.3647 19.9472 16.0144 19.9472 15.6543C19.9472 13.1201 22.0032 11.0641 24.5383 11.0641C25.8588 11.0641 27.0514 11.6223 27.8891 12.5146C28.9349 12.3083 29.917 11.9263 30.8041 11.4005C30.4608 12.4719 29.7333 13.371 28.7854 13.9395C29.7141 13.8284 30.5991 13.5822 31.4215 13.2166C30.8072 14.1373 30.0281 14.946 29.1318 15.5939Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_12_1594">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clipPath="url(#clip0_12_1596)">
              <path
                d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM14.1882 30.2344H9.31732V15.5801H14.1882V30.2344ZM11.7529 13.5791H11.7212C10.0867 13.5791 9.02954 12.4539 9.02954 11.0477C9.02954 9.60968 10.119 8.51562 11.7853 8.51562C13.4515 8.51562 14.4769 9.60968 14.5087 11.0477C14.5087 12.4539 13.4515 13.5791 11.7529 13.5791ZM31.7517 30.2344H26.8814V22.3947C26.8814 20.4245 26.1761 19.0808 24.4138 19.0808C23.0682 19.0808 22.2668 19.9872 21.9147 20.8621C21.7859 21.1752 21.7545 21.6129 21.7545 22.0508V30.2344H16.8839C16.8839 30.2344 16.9476 16.955 16.8839 15.5801H21.7545V17.655C22.4017 16.6565 23.5599 15.2362 26.1441 15.2362C29.3488 15.2362 31.7517 17.3306 31.7517 21.8317V30.2344Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_12_1596">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clipPath="url(#clip0_12_1598)">
              <path
                d="M40 20C40 8.95312 31.0469 0 20 0C8.95312 0 0 8.95312 0 20C0 31.0469 8.95312 40 20 40C20.1172 40 20.2344 40 20.3516 39.9922V24.4297H16.0547V19.4219H20.3516V15.7344C20.3516 11.4609 22.9609 9.13281 26.7734 9.13281C28.6016 9.13281 30.1719 9.26562 30.625 9.32812V13.7969H28C25.9297 13.7969 25.5234 14.7812 25.5234 16.2266V19.4141H30.4844L29.8359 24.4219H25.5234V39.2266C33.8828 36.8281 40 29.1328 40 20Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_12_1598">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <hr
        style={{
          width: "1216px",
          border: "1px solid #0D3166",
          margin: "0 auto",
        }}
      />
      <p
        style={{
          padding: "40px 0 68px",
          color: "#FFF",
          textAlign: "center",
          fontFamily: "Manrope",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "150%",
        }}
      >
        © All rights reserve by <span style={{ color: "#F60E0E" }}>MAAC</span>
      </p>
    </div>
  );
};

export default Footer;
