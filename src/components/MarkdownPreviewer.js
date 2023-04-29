import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState("");
  const darkMode = useSelector((state) => state.darkMode);

  const getSanitizedMarkdown = () => {
    return { __html: DOMPurify.sanitize(markdown) };
  };

  return (
    <Container
      fluid
      className={`vh-100 d-flex flex-column ${darkMode ? "dark" : "light"}`}
    >
      <Row>
        <Col>
          <h1 className="text-center my-5">Markdown Previewer</h1>
        </Col>
      </Row>
      <Formik
        initialValues={{ markdown: "" }}
        validationSchema={Yup.object({
          markdown: Yup.string().required("Markdown is required"),
        })}
        onChange={(values) => {
          setMarkdown(values.markdown);
        }}
      >
        <Form>
          <Row>
            <Col>
              <Field name="markdown">
                {({ field, form }) => (
                  <Form.Control
                    as="textarea"
                    rows={10}
                    placeholder="Enter markdown here..."
                    {...field}
                  />
                )}
              </Field>
              <ErrorMessage
                name="markdown"
                component="div"
                className="text-danger"
              />
            </Col>
            <Col>
              <div
                className="bg-white p-3"
                dangerouslySetInnerHTML={getSanitizedMarkdown()}
              ></div>
            </Col>
          </Row>
        </Form>
      </Formik>
    </Container>
  );
}

export default MarkdownPreviewer;
