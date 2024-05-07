import React from "react";
import { Col, Row } from "react-bootstrap";
import { cssFormat, textFormat } from "../config/formatConfig";
// import AtText from "../atoms/atText";

function generateText(
  text: string | string[],
  css: string | string[],
  str?: string
): any {
  if (typeof text === "string")
    return (
      <h1 className={[cssFormat(css, 0), ""].join(" ")}>{textFormat(text)}</h1>
    );
  let content;
  if (Array.isArray(text)) {
    content = text.map((t: string, i: number) => {
      if (str === "cv" && i == 1) {
        return (
          <div className="flex items-center">
            <h1 className={[cssFormat(css, i + 1), ""].join(" ")}>
              {textFormat(text[i])}
            </h1>
            <h1 className={[cssFormat(css, i + 2), ""].join(" ")}>
              {textFormat(text[i + 1])}
            </h1>
          </div>
        );
      } else if (str === "cv" && i == 2) {
        return;
      } else
        return (
          <h1 className={[cssFormat(css, i + 1), ""].join(" ")}>
            {textFormat(t)}
          </h1>
        );
    });
    return content;
  }
}

function Logo({
  content,
  css,
  struture,
}: {
  content: string | string[];
  css?: string | string[];
  struture?: string;
}) {
  return (
    <div className={cssFormat(css, 0)}>
      {generateText(content, css, struture)}
    </div>
  );
}

export default Logo;
