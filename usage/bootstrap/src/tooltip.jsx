const { h, define, Component, classNames, uniqueTag } = omii;
const {
  css: { getCSSStyleSheets },
} = omii.ui;
const App = uniqueTag(
  class extends Component {
    static css = [
      getCSSStyleSheets("reboot", "buttons"),
      `:host{
        display:block;
        height:200px;
      }`,
    ];
    render() {
      return (
        <>
          <oi-tooltip placement="right">
            <button class="btn  btn-primary">作為父組件的子組件</button>
            <div slot="body">
              this is a tip And here's some amazing content. It's very engaging.
              Right?
            </div>
          </oi-tooltip>

          <hr />
          <button class="btn btn1 btn-primary">show tip left-start</button>
          <oi-tooltip
            reference="button.btn1"
            placement="left-start"
            strategy="fixed"
            body=" this is a tip And here's some amazing content. It's very engaging.
            Right?"
          ></oi-tooltip>
          <button class="btn btn2 btn-primary">show tip left</button>
          <oi-tooltip
            reference="button.btn2"
            body={
              <b style="color:red">
                this is a tip And here's some amazing content. It's very
                engaging. Right?
                空间不够时只能自动显示
              </b>
            }
            placement="left"
          ></oi-tooltip>
          <button class="btn btn3 btn-primary">show tip right</button>
          <oi-tooltip reference="button.btn3" placement="right">
            <h1 slot="body">
              this is a tip And here's some amazing content. It's very engaging.
              Right?
            </h1>
          </oi-tooltip>

          <button class="btn btn4 btn-primary">show tip top</button>
          <oi-tooltip reference="button.btn4" placement="top">
            <div slot="body">
              this is a tip And here's some amazing content. It's very engaging.
              TOP?
            </div>
          </oi-tooltip>
        </>
      );
    }
  }
);

export default (
  <fieldset>
    <legend>tooltip </legend>
    <pre></pre>
    <App />
  </fieldset>
);
