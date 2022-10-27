import { h, render, uniqueTag, Component } from "omii";

let App = uniqueTag(
  class extends Component {
    html = "<h1>hello,world</h1>";
    render() {
      return <div unsafeHTML={this.html}></div>;
    }
  }
);

render(<App />, "body");
