import { useAuth } from "context/auth-context";
import React from "react";
import { ProjectListScreen } from "screens/project-list";
import styled from "@emotion/styled";
import { Button, Dropdown, Menu } from "antd";
import { Row } from "components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  const value: any = undefined;
  return (
    <Container>
      {value.notExist}
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo
            width={"18rem"}
            color={"rgb(38,132,255)"}
          ></SoftwareLogo>
          <h3>用户</h3>
          <h2>项目</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="logout">
                  <Button type="link" onClick={logout}>
                    {" "}
                    登出
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            <Button onClick={(e) => e.preventDefault()} type="link">
              Hi {user?.name}
            </Button>
          </Dropdown>
        </HeaderRight>
      </Header>

      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
  height: 100vh;
`;

const Header = styled(Row)`
  justify-content: space-between;
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderLeft = styled(Row)`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div``;

const Main = styled.main`
  grid-area: main;
`;
