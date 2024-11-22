import React from "react";
import { Layout } from "antd";
import UserProfiles from "./pages/UserProfiles";

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Content style={{ padding: "1.5rem", minHeight: "calc(100vh - 134px)" }}>
        <UserProfiles />
      </Content>
    </Layout>
  );
};

export default App;
