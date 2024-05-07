import React from "react";
import { Col, Row } from "react-bootstrap";
import { cssFormat } from "../config/formatConfig";
// import AtText from "../atoms/atText";

function Block({ content, css }: { content: any; css?: string | string[] }) {
  return (
    <Row>
      <Col className="!w-max !max-w-max">
        <div className={[cssFormat(css, 0), "bg-white py-3 px-9"].join(" ")}>
          {content}
        </div>
      </Col>
    </Row>
  );
}

export default Block;
