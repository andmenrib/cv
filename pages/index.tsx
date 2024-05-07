import Link from "next/link";
import Layout from "../components/Layout";
import { textFormat } from "../config/formatConfig";
import Icon from "../config/icon";
import Block from "../components/Block";
import Logo from "../components/Logo";
import { Col, Row } from "react-bootstrap";
import { LanguageContext } from "../contexts/languageContext";
import { useContext, useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import Animation from "../components/Animation";

function IndexPage() {
  const [language, setLanguage] = useContext(LanguageContext);
  const [animation, setAnimation] = useState<any>();

  useEffect(() => {
    setAnimation(<Animation />);
  }, []);

  return (
    // <Layout title="Home | Next.js + TypeScript Example">
    <div className="relative">
      <div className="grid gap-y-4 !z-50">
        <Row className="flex justify-center items-center">
          <Col className="!w-max !max-w-max">
            <Block
              content={
                <Logo
                  content={["l|:Anderson", "l|:M", "l|:endes", "l|:Ribeiro"]}
                  css={[
                    "font-['DM_Mono']",
                    "",
                    "text-yellow-600 font-['Pixelify_Sans'] text-[3rem]",
                  ]}
                  struture="cv"
                />
              }
            />
          </Col>
          <Col>
            <Buttons
              content={[
                "ri/RiLinkedinFill",
                "ri/RiGithubLine",
                // "ri/RiCodeSSlashLine",
              ]}
              links={["https://www.linkedin.com/in/anderson-mendes-ribeiro/"]}
              css={[
                "flex flex-col",
                "text-black !p-1.5 bg-transparent border-0 rounded-0 hover:ring-1 hover:ring-lime-500 hover:!text-lime-700 hover:shadow-inner",
                "text-black !p-1.5 bg-transparent border-0 rounded-0 hover:ring-1 hover:ring-lime-500 hover:!text-lime-700 hover:shadow-inner",
                // "text-black !p-1.5 bg-transparent border-0 rounded-0 hover:ring-1 hover:ring-lime-500 hover:!text-lime-700 hover:shadow-inner",
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Block
              content={
                <h3 className="font-['DM_Mono'] m-0 capitalize">
                  {textFormat(
                    language === "en"
                      ? ["l|:full stack", "programmer"]
                      : ["l|:full stack", "programmer"].reverse()
                  )}
                </h3>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col className="!w-[calc(100vw_-_2.25rem)]">
            <Block
              content={
                <h6 className="font-['DM_Mono'] m-0">{textFormat("resume")}</h6>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col className="!w-[calc(100vw_-_2.25rem)]">
            <Block
              content={
                <div>
                  <div className="flex items-center gap-2 mb-2 text-lime-700">
                    {Icon("bi/BiHome", "26px")}
                    <h4 className="font-['Pixelify_Sans'] m-0 capitalize">
                      {textFormat("address")}
                    </h4>
                  </div>
                  <h5 className="font-['DM_Mono'] m-0">
                    {textFormat("l|:Moreno 3028 - Balvanera")}
                  </h5>
                  <h5 className="font-['DM_Mono'] m-0">
                    {textFormat(
                      "l|:Ciudad Autónoma de Buenos Aires - Argentina"
                    )}
                  </h5>
                </div>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col className="!w-[calc(100vw_-_2.25rem)]">
            <Block
              content={
                <div className="flex flex-col md:flex-row items-center gap-2">
                  {Icon("md/MdMail", "26px")}
                  <h3 className="font-['DM_Mono'] m-0 break-all">
                    {textFormat("l|:sr.andersonmendesribeiro@gmail.com")}
                  </h3>
                </div>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col className="!w-[calc(100vw_-_2.25rem)]">
            <Block
              content={
                <div className="grid gap-4">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    {Icon("ri/RiBriefcase4Fill", "26px")}
                    <div className="border-l-2 pl-6">
                      <h5 className="font-['Pixelify_Sans'] m-0">
                        {textFormat(
                          language === "en"
                            ? [
                                "l|:senior",
                                "programmer",
                                "l|:-",
                                "l|:full stack",
                              ]
                            : [
                                "programmer",
                                "l|:senior",
                                "l|:-",
                                "l|:full stack",
                              ]
                        )}
                      </h5>
                      <h6 className="font-['DM_Mono'] m-0">
                        {textFormat([
                          "january",
                          "l|:2019",
                          "l|:-",
                          "currently",
                        ])}
                      </h6>
                      <h4 className="font-['DM_Mono'] m-0">
                        {textFormat(
                          "l|:Beesion  - Low Code Technology Solutions"
                        )}
                      </h4>
                      <h6 className="font-['DM_Mono'] m-0 capitalize">
                        {textFormat([
                          "l|:Palermo - Ciudad Autónoma de Buenos Aires",
                          "l|:-",
                          "argentina",
                        ])}
                      </h6>
                      <h5 className="font-['Pixelify_Sans'] m-0">
                        {textFormat("teachingCode")}
                      </h5>
                      <h6 className="font-['DM_Mono'] m-0">
                        {textFormat([
                          "april",
                          "l|:2015",
                          "l|:-",
                          "june",
                          "l|:2015",
                        ])}
                      </h6>
                      <h4 className="font-['DM_Mono'] m-0">
                        {textFormat("l|:Colégio Viçosa")}
                      </h4>
                      <h6 className="font-['DM_Mono'] m-0 capitalize">
                        {textFormat([
                          "l|:Viçosa - Minas Gerais",
                          "l|:-",
                          "brazil",
                        ])}
                      </h6>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    {Icon("fa/FaUniversity", "26px")}
                    <div className="border-l-2 pl-6">
                      <h6 className="font-['Pixelify_Sans'] m-0">
                        {textFormat("university")}
                      </h6>
                      <h6 className="font-['DM_Mono'] m-0">
                        {textFormat([
                          "march",
                          "l|:2012",
                          "l|:-",
                          "november",
                          "l|:2016",
                        ])}
                      </h6>
                      <h5 className="font-['DM_Mono'] m-0 capitalize">
                        {textFormat([
                          "l|:Universidade Federal de Viçosa",
                          "l|:-",
                          "computerScience",
                        ])}
                      </h5>
                      <h6 className="font-['DM_Mono'] m-0 capitalize">
                        {textFormat([
                          "l|:Viçosa - Minas Gerias",
                          "l|:-",
                          "brazil",
                        ])}
                      </h6>
                      <h6 className="font-['Pixelify_Sans'] m-0">
                        {textFormat("exchangeship")}
                      </h6>
                      <h6 className="font-['DM_Mono'] m-0">
                        {textFormat([
                          "february",
                          "l|:2014",
                          "l|:-",
                          "december",
                          "l|:2014",
                        ])}
                      </h6>
                      <h5 className="font-['DM_Mono'] m-0 capitalize">
                        {textFormat([
                          "l|:University at Albany",
                          "l|:-",
                          "computerScience",
                        ])}
                      </h5>
                      <h6 className="font-['DM_Mono'] m-0 capitalize">
                        {textFormat(["l|:Albany - New York", "l|:-", "usa"])}
                      </h6>
                    </div>
                  </div>
                </div>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col className="!w-[calc(100vw_-_2.25rem)]">
            <Block
              content={
                <div>
                  <div className="flex items-center gap-2 text-lime-700">
                    {Icon("fa/FaLanguage", "26px")}
                    <h4 className="font-['Pixelify_Sans'] m-0 capitalize">
                      {textFormat("languages")}
                    </h4>
                  </div>
                  <h6 className="font-['DM_Mono'] m-0 capitalize">
                    {textFormat(["portuguese", "english", "spanish"], "normal")}
                  </h6>
                </div>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col className="!w-[calc(100vw_-_2.25rem)]">
            <Block
              content={
                <div>
                  <div className="flex items-center gap-2 text-lime-700">
                    {Icon("ri/RiCreativeCommonsByFill", "26px")}
                    <h4 className="font-['Pixelify_Sans'] m-0 capitalize">
                      {textFormat("skills")}
                    </h4>
                  </div>
                  <h6 className="font-['DM_Mono'] m-0 capitalize">
                    {textFormat(
                      [
                        "l|:latex",
                        "l|:matLab",
                        "l|:three.js",
                        "pictureManage",
                        "softwareEngineering",
                        "design",
                      ],
                      "normal"
                    )}
                  </h6>
                </div>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col className="!w-[calc(100vw_-_2.25rem)]">
            <Block
              content={
                <div>
                  <div className="flex items-center gap-2 text-lime-700">
                    {Icon("gi/GiPerson", "26px")}
                    <h4 className="font-['Pixelify_Sans'] m-0 capitalize">
                      {textFormat("personal")}
                    </h4>
                  </div>
                  <h6 className="font-['DM_Mono'] m-0 capitalize">
                    {textFormat(
                      [
                        "creativity",
                        "troubleshooting",
                        "debugging",
                        "communicative",
                        "conflictResolution",
                        "criticalThinking",
                      ],
                      "normal"
                    )}
                  </h6>
                </div>
              }
            />
          </Col>
        </Row>
        {/* <p>
      <Link href="/about">About</Link>
    </p> */}
      </div>
      <div className="fixed top-0 w-screen !z-[-100]">{animation}</div>
    </div>
    // </Layout>
  );
}

export default IndexPage;
