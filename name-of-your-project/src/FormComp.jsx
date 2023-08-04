import { Form, redirect, useActionData } from "react-router-dom";
import React from 'react'

export default function Formcomp() {
    const message =useActionData();
    console.log(message);
    return (
        <Form method="post">
            <input type="text" name="title" />
            <input type="text" name="body" />
            <input type="number" name="userId" />
            <button type="submit">Submit</button>
        </Form>
    )
}
//   export async function action({ request }) {
//     const formData = await request.formData();
//     const data = Object.fromEntries(formData);
//     return data;
//   }

  export async function action(data) {
    const formData = await data.request.formData();
    console.log(data);
    const dataa = Object.fromEntries(formData);
    return dataa;
  }