import * as React from "react";
import { useParams } from "react-router";

import { Page } from "../../components/Page";
import { Form } from "./Form";

const PageForm = () => {
  const { id } = useParams<{ id?: string }>();
  return (
    <Page title={!id ? "Criar gênero" : "Editar gênero"}>
      <Form />
    </Page>
  );
};

export default PageForm;
