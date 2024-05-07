import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { cssFormat, textFormat } from "../config/formatConfig";
import Icon from "../config/icon";
import { useRouter } from "next/router";
// import AtText from "../atoms/atText";

function Buttons({
  content,
  links,
  css,
}) {
  const router = useRouter();

  function generateButtons(buttons) {
    const content = buttons.map((bi, i) => {
      return (
        <Button
        className={[
          cssFormat(css, i + 1),
          buttons.length - 1 > i ? "mb-2" : "",
        ].join(" ")}
        disabled={i == 1 ? true : false}
        onClick={() => {
          router.push(links[i]);
        }}
        >
          {Icon(bi, "30px")}
        </Button>
      );
    });
    return content;
  }

  return (
    <Row>
      <Col className="!w-max !max-w-max">
        <div className="bg-white py-3 px-9">
          <div className={[cssFormat(css, 0), "m-0"].join(" ")}>
            {generateButtons(content)}
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Buttons;
