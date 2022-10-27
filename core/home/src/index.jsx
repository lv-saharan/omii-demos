import {
  h,
  render,
  Component,
  classNames,
  apis,
} from "omii";

const $arr = (
  <ul>
    {[].map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);
