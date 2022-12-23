import { h, render, define, Component } from "omii";

import css from "./index.scss";

const sleep = n => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, n * 1000);
  })
}
define("oi-async-1", class extends Component {
  async render() {
    await sleep(1)
    return <>
      <h1>asyc....</h1>
    </>
  }
})

define("oi-app", class extends Component {

  render() {
    return <>
      <h1>hello,world</h1>
      <oi-async-1 />
    </>
  }
})


render(<oi-app></oi-app>, 'body')