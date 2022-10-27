const { h, Component, define } = omii;

define(
  "tab-test",
  class extends Component {
    static css = `
      :host ul{
        list-style:square;
        color:red;
      }
    `;
    render() {
      return (
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      );
    }
  }
);

export default (
  <fieldset>
    <legend>
      <h1>Tab Control</h1>
    </legend>
    <oi-tab
      active-key="lazy"
      active-event="hover"
      css=".nav oi-icon{display:none} .nav.active oi-icon{display:inline-block}"
      items={[
        {
          key: "basic",
          nav: "基本信息",
          pane: (
            <form>
              基本信息设置
              <input />
              name
              <input type="radio" />
              OK?
              <input type="checkbox" />
              oooooo
            </form>
          ),
        },
        {
          key: "position",
          nav: (
            <>
              岗位信息
              <oi-icon onClick={(e) => alert(e)} name="close" color="red" />
            </>
          ),
          pane: <div>岗位信息岗位信息岗位信息岗位信息岗位信息</div>,
        },
        {
          key: "lazy",
          nav: "延遲加載",
          pane: ({ update, vnode }) => {
            if (vnode.__pane) return vnode.__pane;
            setTimeout(() => {
              vnode.__pane = (
                <div>
                  <a
                    href="https://juejin.cn/post/7037036742985121800"
                    target="_blank"
                  >
                    很多的Loading效果
                  </a>
                </div>
              );
              update();
            }, 1000);

            return <oi-loading name="rectangle" size="5" color="red" />;
          },
        },
      ]}
    />
    <hr />
    <h2>Tab内部样式需要在内部完成！两种方式</h2>
    <oi-tab
      css={`
        :host .css-pane {
          list-style: circle;
          color: blue;
        }
      `}
      items={[
        {
          nav: "css属性注入",
          pane: (
            <ul class="css-pane">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          ),
        },
        {
          nav: "组件化",
          pane: <tab-test />,
        },
      ]}
    />
  </fieldset>
);
