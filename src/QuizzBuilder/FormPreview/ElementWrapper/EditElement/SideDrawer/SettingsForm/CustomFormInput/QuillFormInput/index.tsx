import { Input } from "antd";
import React, { forwardRef } from "react";
import "react-quill/dist/quill.snow.css";
import "./quillFormInput.css";

export default forwardRef((props: any, ref) => {
  const { value, defaultValue, onChange, currentLanguage } = props;

  function onChangeHandler(
    content: string
    // delta: Quill.Delta,
    //  source: Quill.Sources,
    // editor: UnprivilegedEditor
  ) {
    onChange({ ...value, [currentLanguage]: content });
  }

  return (
    <Input
      className="quill-form-input"
      //IF the text overflows the input, wrap it to the next line
      style={{ whiteSpace: "normal" }}
      value={value[currentLanguage]}
      defaultValue={defaultValue}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  );
});
