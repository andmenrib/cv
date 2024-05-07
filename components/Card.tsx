import React from "react";
import { Col, Row } from "react-bootstrap";
import { cssFormat, textFormat } from "../config/formatConfig";
// import AtText from "../atoms/atText";

function Card({
  content,
  css,
}: {
  content: string | string[];
  css?: string | string[];
}) {
  return (
    <Row>
      <Col className="!w-max !max-w-max">
        <div className="bg-white py-3 px-9">
          <h6 className={[cssFormat(css, 0), "m-0"].join(" ")}>
            {textFormat(content)}
          </h6>
        </div>
      </Col>
    </Row>
  );
}

export default Card;
