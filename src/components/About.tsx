'use client';
import { styled } from "@mui/material";
import { Section, CustomContainer } from "./CustomElements";
import Image from "next/image";

const SectionWrapper = styled('div')(({ }) => ({
  display: 'flex',
  gap: '61px',
  padding: '191px 0 214px 0'
}));

const About = () => {
  return (
    <Section>
      <CustomContainer>
        <SectionWrapper>
          <Image
            src='/images/about.png'
            width={859}
            height={604}
            alt="Sheep"
          />
          <div>
            <h2>ABOUT Sheeps</h2>
            <p>
              Welcome to the enchanting world of NFT Chic Sheeps, where the extraordinary meets the woolly, and creativity is spun into a digital masterpiece.
              NFT Chic Sheeps aren&rsquo;t just an investment; they&rsquo;re a statement. As you explore the galleries of our woolly wonders, you&rsquo;re joining a community that&rsquo;s shaping the future of digital ownership. Say goodbye to traditional collectibles; say hello to a new era of ownership and expression.
            </p>
          </div>
        </SectionWrapper>
      </CustomContainer>
    </Section>
  )
}

export default About
