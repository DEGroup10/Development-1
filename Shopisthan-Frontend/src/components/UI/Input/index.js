import React from "react";
import { Form }from 'react-bootstrap';

const Input = (props) => {
  return (
    <Form >

 {props.label && <Form.Label>{props.label}</Form.Label>}
      {/* <Form.Label>{props.label}</Form.Label> */}
      <Form.Control 
      type={props.type} 
      placeholder={props.placeholder}
          value = {props.value}
          onChange = {props.onChange}
          {...props}
      />
      <Form.Text className="text-muted">
        {props.errorMessage}
      </Form.Text>
    </Form>
  );
};

export default Input;
