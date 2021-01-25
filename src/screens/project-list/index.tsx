import React, { useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";

import { useDebounce } from "utils";

import styled from "@emotion/styled";
import { Typography } from "antd";

import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
import { useDocumentTitle } from "utils";
import { Test } from "./test";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  console.log("projectLIstScrren param.name", param.name);

  const debouncedParam = useDebounce(param, 200);

  const { isLoading, error, data: list } = useProjects(debouncedParam);

  const { data: users } = useUsers();

  useDocumentTitle("项目列表", false);

  return (
    <Container>
      <h1>项目列表</h1>
      <Test />
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List dataSource={list || []} users={users || []} loading={isLoading} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
