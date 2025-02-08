import localFont from "next/font/local";

const yekanBakh = localFont({
  src: [
    {
      path: "./Yekan-Bakh/YekanBakh-Fat.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Yekan-Bakh/YekanBakh-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Yekan-Bakh/YekanBakh-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Yekan-Bakh/YekanBakh-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Yekan-Bakh/YekanBakh-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Yekan-Bakh/YekanBakh-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Yekan-Bakh/YekanBakh-Thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Yekan-Bakh/YekanBakh-Hairline.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export default yekanBakh;
