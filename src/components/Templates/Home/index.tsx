import { Container } from "./styles";

const TemplateHome: React.FC = (props) => {
  return (
    <Container>
      <section>{props.children}</section>
    </Container>
  );
};

export default TemplateHome;
