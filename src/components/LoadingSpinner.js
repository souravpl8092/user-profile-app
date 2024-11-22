import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const LoadingSpinner = () => (
  <div
    style={{
      textAlign: "center",
      marginTop: "50px",
    }}
  >
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 108,
          }}
          spin
        />
      }
    />
  </div>
);

export default LoadingSpinner;
