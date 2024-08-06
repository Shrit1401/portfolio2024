import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import emailImage from "../public/samplenews.png";

export const EmailTemplate = () => (
  <Html>
    <Head />
    <Preview>You Signed up...</Preview>
    <Body style={{ lineHeight: "1.6" }}>
      <Container>
        <Section
          style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}
        >
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Hello World ~ Shrit Here
          </Text>
          <Text style={{ marginBottom: "20px" }}>
            Hey there! you’re gonna hear from me each week, telling you about
            stuff which I think is cool and what i have been upto.
          </Text>
          <Text style={{ marginBottom: "20px" }}>
            I love building technical and non-technical things, and since I am a
            student, I will be sharing my study session, lol.
          </Text>
          <Img
            src="https://i.imgur.com/tbCTGJM.png"
            alt="A cringe thumbnail I made for a YouTube video which I think is cool lol, check out the video here:"
            style={{ marginBottom: "20px", width: "100%", borderRadius: "8px" }}
          />
          <Link href="https://www.youtube.com/watch?v=gFWo53orfg8">
            Check out the video here
          </Link>
          <Text>- Shrit</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
