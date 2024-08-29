/** @format */

import { Button, Col, Row } from "antd";

const Buttons: React.FC = () => {
  const span = {
    xs: 12,
    sm: 8,
    md: 6,
  };
  return (
    <>
      <Row gutter={[24, 24]}>
        <Col {...span} className="">
          <Button type="primary">Primary Button</Button>
        </Col>
        <Col {...span} className="">
          <Button type="primary" danger>
            Danger Button
          </Button>
        </Col>
        <Col {...span} className="">
          <Button
            type="primary"
            style={{ backgroundColor: "#faad14", borderColor: "#faad14" }}
          >
            Warning Button
          </Button>
        </Col>
        <Col {...span} className="">
          <Button
            type="primary"
            style={{ backgroundColor: "#52c41a", borderColor: "#52c41a" }}
          >
            Success Button
          </Button>
        </Col>
        <Col {...span} className="">
          <Button type="primary" ghost>
            Primary Button
          </Button>
        </Col>
        <Col {...span} className="">
          <Button type="primary" ghost danger>
            Danger Button
          </Button>
        </Col>
        <Col {...span} className="">
          <Button
            type="primary"
            ghost
            style={{ color: "#faad14", borderColor: "#faad14" }}
          >
            Warning Button
          </Button>
        </Col>
        <Col {...span} className="">
          <Button
            type="primary"
            ghost
            style={{ color: "#52c41a", borderColor: "#52c41a" }}
          >
            Success Button
          </Button>
        </Col>
        <Col {...span} className="">
          <Button type="primary" disabled>
            Primary Button
          </Button>
        </Col>
        <Col {...span}>
          <Button type="primary" danger disabled>
            Danger Button
          </Button>
        </Col>
        <Col {...span}>
          <Button type="primary" disabled>
            Warning Button
          </Button>
        </Col>
        <Col {...span}>
          <Button type="primary" disabled>
            Success Button
          </Button>
        </Col>
        <Col {...span}>
          <Button size="middle" type="primary">
            Primary Button
          </Button>
        </Col>
        <Col {...span}>
          <Button size="middle" type="primary" danger>
            Danger Button
          </Button>
        </Col>
        <Col {...span}>
          <Button
            size="middle"
            type="primary"
            style={{ backgroundColor: "#faad14", borderColor: "#faad14" }}
          >
            Warning Button
          </Button>
        </Col>
        <Col {...span}>
          <Button
            size="middle"
            type="primary"
            style={{ backgroundColor: "#52c41a", borderColor: "#52c41a" }}
          >
            Success Button
          </Button>
        </Col>

        <Col {...span}>
          <Button size="large" type="primary">
            Primary Button
          </Button>
        </Col>
        <Col {...span}>
          <Button size="large" type="primary" danger>
            Danger Button
          </Button>
        </Col>
        <Col {...span}>
          <Button
            size="large"
            type="primary"
            style={{ backgroundColor: "#faad14", borderColor: "#faad14" }}
          >
            Warning Button
          </Button>
        </Col>
        <Col {...span}>
          <Button
            size="large"
            type="primary"
            style={{ backgroundColor: "#52c41a", borderColor: "#52c41a" }}
          >
            Success Button
          </Button>
        </Col>
      </Row>
      {/* <Row gutter={[24, 24]}>
      
       
        
      </Row>
      <Row gutter={[24, 24]}>
        
      </Row>
      <Row gutter={[24, 24]}>
       
      </Row>
      <Row gutter={[24, 24]}></Row> */}
      {/* <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div style={{ background: "#00aaff", padding: "16px" }}>Column 1</div>
        </Col>
        <Col span={12}>
          <div style={{ background: "#ffaa00", padding: "16px" }}>Column 2</div>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div style={{ background: "#00ffaa", padding: "16px" }}>Column 3</div>
        </Col>
        <Col span={12}>
          <div style={{ background: "#ff00aa", padding: "16px" }}>Column 4</div>
        </Col>
      </Row>
    </div> */}
    </>
  );
};
export default Buttons;
