import {
  WeElement,
  h,
  render,
  define,
  Component,
} from "omii";
class OMIEl extends WeElement {
  render(props) {
    return <h1>{props.title}</h1>;
  }
}
define("omi-el", OMIEl);
class OMIIEl extends Component {

  render(props) {
    return <h1>{props.title}</h1>;
  }
}
define("omii-el", OMIIEl);
const arr = Array.from({ length: 10000 });

render(<h2>插入10000个 OMII 组件</h2>, "body");

console.time("10000 OMII");
render(
  <div>
    {arr.map((v, index) => (
      <omii-el title={`omi-${index + 1}`}></omii-el>
    ))}
  </div>,
  "body"
);
console.timeEnd("10000 OMII");

render(<h2>插入10000个 OMI 组件</h2>, "body");
console.time("10000 OMI");
render(
  <div>
    {arr.map((v, index) => (
      <omi-el title={`omi-${index + 1}`}></omi-el>
    ))}
  </div>,
  "body"
);
console.timeEnd("10000 OMI");
