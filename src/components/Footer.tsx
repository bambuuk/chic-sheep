"use client";

import { Box, styled } from "@mui/material";
import { CustomContainer } from "./CustomElements";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Link from "next/link";

const FooterUI = styled("footer")(({ theme }) => ({
  width: "100%",
  maxWidth: "1920px",
  padding: "0 110px",
  [theme.breakpoints.down("xl")]: {
    padding: "0 50px",
  },
  [theme.breakpoints.down(1280)]: {
    padding: "0 46px",
  },
  [theme.breakpoints.down(768)]: {
    padding: "0 30px",
  },
}));

const Wrapper = styled("div")(({ theme }) => ({
  padding: "482px 0 52px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down(1280)]: {
    padding: "400px 0 52px 0",
  },
  [theme.breakpoints.down(1024)]: {
    padding: "70.5px 0 100px 0",
    flexDirection: "column",
    justifyContent: "center",
    gap: "50px",
  },
  [theme.breakpoints.down(576)]: {
    padding: "60px 0 90px 0",
    gap: "40px",
  },
}));

const NetworkList = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "45px",
  alignItems: "center",
  [theme.breakpoints.down(1280)]: {
    gap: "30px",
  },
  [theme.breakpoints.down(1024)]: {
    gap: "60px",
  },
  [theme.breakpoints.down(576)]: {
    gap: "50px",
  },
}));

const NetworkLink = styled(Link)(({ theme }) => ({
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "& path": {
    transition: "0.4s all",
  },
  "&:hover path": {
    fill: "#FBB41A",
  },
  [theme.breakpoints.down(1024)]: {
    "&:hover path": {
      fill: "white",
    },
  },
}));

export const Footer = () => {
  return (
    <FooterUI>
      <CustomContainer>
        <Wrapper>
          <Logo />

          <Navigation place={"footer"} />

          <NetworkList>
            <NetworkLink href="https://x.com/" target="_blank">
              <svg
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0687 11.8561L26.12 0H23.7382L15.0106 10.2945L8.03988 0H0L10.5411 15.5671L0 28H2.38199L11.5985 17.1287L18.9601 28H27L16.0681 11.8561H16.0687ZM12.8062 15.7042L11.7382 14.1541L3.24025 1.81954H6.89884L13.7568 11.7739L14.8248 13.324L23.7393 26.2632H20.0807L12.8062 15.7048V15.7042Z"
                  fill="white"
                />
              </svg>
            </NetworkLink>

            <NetworkLink href="https://discord.com/" target="_blank">
              <svg
                width="27"
                height="20"
                viewBox="0 0 27 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.9486 16.0126C11.8204 18.4868 16.8174 18.9687 22.4799 15.1176C22.4384 15.1848 21.3183 16.9765 18.3727 17.8947C18.995 18.813 19.8455 19.8656 19.8455 19.8656C21.7332 19.8656 23.5794 19.2833 25.1766 18.1635C26.4212 17.2676 27.1264 15.7223 26.9812 14.1098C26.7323 11.355 26.1307 8.66742 25.1973 6.09189C24.0149 2.73245 21.1731 0.403192 17.8749 0.0672209C17.5845 0.0448139 17.3771 0.0448141 17.2526 0.0448141L16.9208 0.403125C20.7168 1.56775 22.6045 3.38185 22.6459 3.44907C16.817 0.268749 9.93024 0.224002 4.05983 3.31469C4.05983 3.31469 5.92674 1.32141 10.0546 0.26875L9.80572 0C9.37009 0 8.95521 0.0448137 8.51965 0.111968C5.47036 0.671875 2.91896 2.93391 1.81954 6.04701C0.86533 8.73458 0.243045 11.5565 0.014884 14.4233C-0.109573 15.9462 0.554218 17.4468 1.71584 18.3203C3.25083 19.4177 5.07623 20 6.9224 20C6.9224 20 7.66914 18.9473 8.41594 18.0067C5.61557 17.1108 4.4747 15.3191 4.45395 15.2519L4.98097 15.5425C5.29602 15.7163 5.61902 15.8737 5.9486 16.0126ZM9.20419 14.065C7.85585 14.0201 6.79794 12.7884 6.83945 11.3102C6.88095 9.92161 7.91811 8.8018 9.20419 8.75698C10.5525 8.8018 11.6104 10.0336 11.5689 11.5118C11.5067 12.9004 10.4903 14.0202 9.20419 14.065ZM17.6674 14.065C16.3191 14.0201 15.2612 12.7884 15.3027 11.3102C15.3442 9.92161 16.3814 8.8018 17.6674 8.75698C19.0158 8.8018 20.0737 10.0336 20.0322 11.5118C19.9907 12.9004 18.9535 14.0202 17.6674 14.065Z"
                  fill="white"
                />
              </svg>
            </NetworkLink>

            <NetworkLink href="https://web.telegram.org/" target="_blank">
              <svg
                width="25"
                height="22"
                viewBox="0 0 25 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.441574 10.5489L6.20208 12.722L8.43175 19.9694C8.57442 20.4336 9.136 20.6052 9.50875 20.2971L12.7198 17.6514C13.0563 17.3742 13.5358 17.3604 13.8875 17.6185L19.679 21.8683C20.0778 22.1612 20.6427 21.9404 20.7427 21.4534L24.9853 0.82706C25.0944 0.295085 24.5773 -0.148705 24.0761 0.047206L0.434824 9.26505C-0.148593 9.49247 -0.14351 10.3273 0.441574 10.5489ZM8.07242 11.5652L19.3306 4.55695C19.5329 4.43137 19.7411 4.70789 19.5673 4.87078L10.2761 13.6C9.9495 13.9073 9.73884 14.3185 9.67917 14.7648L9.36267 17.1354C9.32075 17.452 8.88083 17.4834 8.79442 17.1771L7.57717 12.8541C7.43775 12.3611 7.64092 11.8344 8.07242 11.5652Z"
                  fill="white"
                />
              </svg>
            </NetworkLink>

            <NetworkLink href="https://www.instagram.com/" target="_blank">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_27_446)">
                  <path
                    d="M22.1392 5.18115C21.7645 5.18115 21.4595 5.48614 21.4595 5.86092C21.4595 6.23569 21.7645 6.54068 22.1392 6.54068C22.5141 6.54068 22.819 6.23575 22.819 5.86092C22.819 5.48609 22.5141 5.18115 22.1392 5.18115Z"
                    fill="white"
                  />
                  <path
                    d="M14 7.97363C10.6771 7.97363 7.97363 10.6771 7.97363 14C7.97363 17.3229 10.6771 20.0264 14 20.0264C17.323 20.0264 20.0264 17.323 20.0264 14C20.0264 10.6771 17.323 7.97363 14 7.97363Z"
                    fill="white"
                  />
                  <path
                    d="M20.3242 0H7.67577C3.44334 0 0 3.44334 0 7.67583V20.3242C0 24.5567 3.44334 28 7.67577 28H20.3242C24.5567 28 28 24.5567 28 20.3242V7.67583C28 3.44334 24.5567 0 20.3242 0ZM14 21.6799C9.76527 21.6799 6.32018 18.2347 6.32018 14C6.32018 9.76527 9.76533 6.32023 14 6.32023C18.2347 6.32023 21.6799 9.76533 21.6799 14C21.6799 18.2347 18.2347 21.6799 14 21.6799ZM22.1392 8.19416C20.8526 8.19416 19.8059 7.14744 19.8059 5.86086C19.8059 4.57428 20.8526 3.52751 22.1392 3.52751C23.4258 3.52751 24.4725 4.57423 24.4725 5.8608C24.4725 7.14738 23.4258 8.19416 22.1392 8.19416Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_27_446">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </NetworkLink>
          </NetworkList>
        </Wrapper>
      </CustomContainer>
    </FooterUI>
  );
};
