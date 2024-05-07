import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
// import AtText from "../atoms/atText";
import { LanguageContext } from "../contexts/languageContext";
import { Language } from "../interfaces";
import { cssFormat } from "../config/formatConfig";
// import AtButton from "../atoms/atButton";

function Header({
  content,
  css,
}: {
  content: string[];
  css?: string | string[];
}) {
  const [language, setLanguage] = useContext(LanguageContext);

  function generateButtons(langs: string[]): any {
    // const langs = ["en", "es", "pt"];
    const content = langs.map((l: Language, i: number) => {
      return (
        <Button
          className={[
            cssFormat(css, i + 1),
            langs.length - 1 > i ? "mr-2" : "",
          ].join(" ")}
          onClick={() => {
            setLanguage(l);
          }}
        >
          {l}
        </Button>
      );
    });
    return content;
  }

  return (
    <Row>
      <Col className="!w-max !max-w-max">
        <div className={[cssFormat(css, 0), "bg-white py-3 px-9"].join(" ")}>
          {generateButtons(content)}
        </div>
      </Col>
    </Row>
  );
}

export default Header;
