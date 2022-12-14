const { h, define, Component, classNames, uniqueTag } = omii;
const { css } = omii.ui;
const App = uniqueTag(
  class extends Component {
    static css = [
      css.getCSSStyleSheets(
        "reboot",
        "popover",
        "toasts",
        "utilities",
        "transitions",
        "close"
      ),
      `:host{
        display:block;
        height:200px;
      }
      
      `,
    ];
    render() {
      return (
        <>
          <oi-toast visible>
            <span slot="header">
              <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
                class="rounded me-2"
                style="height:3rem;"
                alt="..."
              />
              <strong class="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </span>
            hello!
          </oi-toast>
          <oi-toast class="show position-fixed bottom-0 start-0 p-6">
            <span slot="header" className="d-flex align-items-center">
              <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
                class="rounded me-2"
                style="height:3rem;"
                alt="..."
              />
              <strong class="me-auto">Bootstrap</strong>
              <small>22 mins ago</small>
            </span>
            hello!
          </oi-toast>
          {({ update, vnode }) => {
            vnode.index = vnode.index ?? -1;
            vnode.index++;
            let $toast = [];
            setTimeout(() => {
              update();
            }, 10 * 1000);
            for (let i = 0; i < vnode.index; i++) {
              $toast.push(
                <oi-toast visible key={`key-${i}`}>
                  <span slot="header" className="d-flex align-items-center">
                    <img
                      src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7"
                      class="rounded me-2"
                      style="height:3rem;"
                      alt="..."
                    />
                    <strong class="me-auto">??????</strong>
                    <small>11 mins ago</small>
                  </span>
                  hello! ???{i + 1}???
                </oi-toast>
              );
            }
            return <div class="position-fixed bottom-0 end-0 p-3">{$toast}</div>;
          }}
        </>
      );
    }
  }
);

export default (
  <fieldset>
    <legend>Toast </legend>
    <pre></pre>
    <App />
  </fieldset>
);
