const LTR = () => {
  return (
    <div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500;1,600&display=swap");
        @font-face {
          font-family: "Cookie";
          src: url("/fonts/Cookie/Cookie-Regular.woff2") format("woff2"),
            url("/fonts/Cookie/Cookie-Regular.woff") format("woff"),
            url("/fonts/Cookie/Cookie-Regular.ttf") format("ttf");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        body {
          font-family: "Open Sans", "Iransans";
        }
        .font-openSans {
          font-family: "Open Sans", sans-serif;
        }
        .font-cookie {
          font-family: "Cookie";
        }

        @keyframes progress-loading {
          0% {
            transform: translateX(-25vw);
            max-width: 25vw;
          }
          50% {
            transform: translateX(25vw);
            max-width: 50vw;
          }
          100% {
            transform: translateX(100vw);
            max-width: 25vw;
          }
        }

        @keyframes progress-loading {
          0% {
            transform: translateX(-25vw);
            max-width: 25vw;
          }
          50% {
            transform: translateX(25vw);
            max-width: 50vw;
          }
          100% {
            transform: translateX(100vw);
            max-width: 25vw;
          }
        }
      `}</style>
    </div>
  );
};
export default LTR;
