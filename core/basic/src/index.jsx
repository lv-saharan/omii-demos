import { h, render, define, Component } from "omii";

import css from "./index.scss";
//render 标准控件
let _target = "_blank";
render(
  <h1>
    hello,
    <a href="213" target={_target}>
      qwe
    </a>
    <hr />
    <span data-pre="hello">world</span>
  </h1>,
  "body"
);

//自定义一个组件
class C0 extends Component {
  css = css;
  
  changeName(name) {
    this.updateProps({
      name,
    });
  }
  render(props) {
    return (
      <h1>
        hi:{props.name}
        <span data-pre="hello" data-color="blue">
          world
        </span>
      </h1>
    );
  }
}
define("oi-c0", C0);

render(<oi-c0 name="test-c0" css="*{color:red}"></oi-c0>, "body");

//扩展一个控件

define(
  "oi-c1",
  class C1 extends C0 {
    css = `
        h1{
            color:red;
        }  
    `;
  }
);

render(<oi-c1 name="test-c1"></oi-c1>, "body");
