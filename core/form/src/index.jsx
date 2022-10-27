import {
  h,
  render,
  Component,
  classNames,
  apis,
} from "omii";

let form1 = (
  <form>
    <h2>form1</h2>
    <input required></input>
    <input type="submit" value="提交"></input>
    <input type="reset" value="重置"></input>
  </form>
);

render(form1, "body");
