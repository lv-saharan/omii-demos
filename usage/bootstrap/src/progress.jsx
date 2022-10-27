const { h, define, Component, classNames, uniqueTag } = omii;
const { css: { getCSSStyleSheets } } = omii.ui;

const App = uniqueTag(
  class extends Component {
    static css = [
      getCSSStyleSheets(
        "reboot",
        "progress",
        "utilities",
        "transitions"
      ),
    ];
    percent = 26
    installed() {
      setInterval(() => {
        if (this.percent < 100) {
          this.percent++
          this.update()
        }
      }, 1000);
    }
    render() {
      return (
        <>
          hello,world!
          <oi-progress value={this.percent} style="height:1px;width:200px"></oi-progress>
          <hr />
          <oi-progress value={this.percent} class="bg-success"></oi-progress>
          <hr />
          <oi-progress value={this.percent} class="bg-danger" striped></oi-progress>



          <hr />
          <oi-progress value={this.percent} class="bg-danger" striped animated></oi-progress>
        </>
      );
    }
  }
);

export default (
  <fieldset>
    <legend>Uploader </legend>
    <pre></pre>
    <App />
  </fieldset>
);
