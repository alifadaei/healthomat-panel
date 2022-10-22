const RTL = () => {
  return (
    <div>
      <style jsx global>{`
        @font-face {
          font-family: "Iransans";
          src: url("/fonts/Iransans/IRANSansWeb(FaNum).woff2") format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Iransans";
          src: url("/fonts/Iransans/IRANSansWeb(FaNum)_Black.woff2")
            format("woff2");
          font-weight: 800;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Iransans";
          src: url("/fonts/Iransans/IRANSansWeb(FaNum)_Bold.woff2")
            format("woff2");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Iransans";
          src: url("/fonts/Iransans/IRANSansWeb(FaNum)_Light.woff2")
            format("woff2");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Iransans";
          src: url("/fonts/Iransans/IRANSansWeb(FaNum)_Medium.woff2")
            format("woff2");
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Iransans";
          src: url("/fonts/Iransans/IRANSansWeb(FaNum)_UltraLight.woff2")
            format("woff2");
          font-weight: 200;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: dana;
          font-style: normal;
          font-weight: bold;
          src: url("/fonts/dana/bold/dana-fanum-bold.otf");
          src: url("/fonts/dana/bold/dana-fanum-bold.otf?#iefix")
              format("embedded-opentype"),
            url("/fonts/dana/bold/dana-fanum-bold.woff2") format("woff2"),
            url("/fonts/dana/bold/dana-fanum-bold.woff") format("woff");
          font-display: swap;
        }

        @font-face {
          font-family: dana;
          font-style: normal;
          font-weight: 500;
          src: url("/fonts/dana/medium/dana-fanum-medium.otf");
          src: url("/fonts/dana/medium/dana-fanum-medium.otf?#iefix")
              format("embedded-opentype"),
            url("/fonts/dana/medium/dana-fanum-medium.woff2") format("woff2"),
            url("/fonts/dana/medium/dana-fanum-medium.woff") format("woff");
          font-display: swap;
        }

        @font-face {
          font-family: dana;
          font-style: normal;
          font-weight: 300;
          src: url("/fonts/dana/light/dana-fanum-light.otf");
          src: url("/fonts/dana/light/dana-fanum-light.otf?#iefix")
              format("embedded-opentype"),
            url("/fonts/dana/light/dana-fanum-light.woff2") format("woff2"),
            url("/fonts/dana/light/dana-fanum-light.woff") format("woff");
          font-display: swap;
        }

        @font-face {
          font-family: dana;
          font-style: normal;
          font-weight: normal;
          src: url("/fonts/dana/regular/dana-fanum-regular.otf");
          src: url("/fonts/dana/regular/dana-fanum-regular.otf?#iefix")
              format("embedded-opentype"),
            url("/fonts/dana/regular/dana-fanum-regular.woff2") format("woff2"),
            url("/fonts/dana/regular/dana-fanum-regular.woff") format("woff");
          font-display: swap;
        }

        body {
          font-family: Iransans;
        }
        .font-dana {
          font-family: dana;
        }
        .font-iransans {
          font-family: Iransans;
        }
        @keyframes progress-loading {
          0% {
            transform: translateX(25vw);
            max-width: 25vw;
          }
          50% {
            transform: translateX(-25vw);
            max-width: 50vw;
          }
          100% {
            transform: translateX(-100vw);
            max-width: 25vw;
          }
        }
      `}</style>
    </div>
  );
};
export default RTL;
