import { Container, Row, Col, Form } from "react-bootstrap";
import DOMPurify from "dompurify";
import { useSelector, useDispatch } from "react-redux";
import { setMarkdown } from "../store/reducers/markdownSlice";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { marked } from "marked";

function MarkdownPreviewer({ options }) {
  const markdown = useSelector((state) => state.markdown);
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const handleMarkdownChange = (event) => {
    const cleanedMarkdown = DOMPurify.sanitize(event.target.value);
    dispatch(setMarkdown(cleanedMarkdown));
  };

  return (
    <Container
      fluid
      className={`h-100 d-flex flex-column ${darkMode ? "dark" : "light"}`}
    >
      <Row>
        <Col>
          <h1 className="text-center my-5">Markdown Previewer</h1>
        </Col>
      </Row>
      <Formik
        initialValues={{ markdown }}
        validationSchema={Yup.object({
          markdown: Yup.string().required("Markdown is required"),
        })}
      >
        <Form>
          <Row>
            <Col>
              <Field name="markdown">
                {({ field, form }) => (
                  <Form.Control
                    as="textarea"
                    id="editor"
                    className="paper"
                    rows={10}
                    placeholder="Enter markdown here..."
                    onChange={(e) => {
                      form.setFieldValue("markdown", e.target.value);
                      handleMarkdownChange(e); // llamamos a la función handleMarkdownChange
                    }}
                    value={field.value}
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
                id="preview"
                className="vh-70 bg-white p-3 rounded paper"
                dangerouslySetInnerHTML={{
                  __html: marked(markdown,options),
                }}
              ></div>
            </Col>
          </Row>
        </Form>
      </Formik>
    </Container>
  );
}

export default MarkdownPreviewer;
