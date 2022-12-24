import { h, render, define, Component } from "omii";
import "omii-ui";

import css from "./index.scss";


define("aa-bb", class extends Component {
  static defaultProps = {
    showPager: false,
    total: 100
  }
  show() {
    this.showPager = true;
    this.update()
  }
  get pagerSection() {
    return this.$props.showPager ? <oi-pagination total={this.total} /> : null
  }
  render() {
    return this.pagerSection
  }
})


define("aa-cc", class extends Component {
  show = false
  get pagerSection() {
    return this.show ? <oi-pagination total={this.total} /> : null
  }
  render() {
    return <>
      {this.pagerSection}
      <button onClick={evt => {
        this.show = true
        this.updateSelf()
      }}>show</button>
    </>
  }
})
render(<aa-cc />, "body")