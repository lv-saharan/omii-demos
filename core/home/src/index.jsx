import {
  h,
  render,
  Component,
  classNames,
  define
} from "omii";

define("a-c", class extends Component {

  static defaultProps = {
    value: 7788
  }
  static propTypes = {
    value: Number
  }
  get value() {
    return this.$props.value
  }
  set value(value) {
    this.update$Props({ value })
  }
  render() {
    return <div>value is {this.value}</div>
  }
})

render(<a-c value="123" />, "body")