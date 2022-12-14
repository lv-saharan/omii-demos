const { h, define, Component, classNames, uniqueTag } = omii;
const { css } = omii.ui;
const themeColors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];
const App = uniqueTag(
  class extends Component {
    static css = [
      css.CSSStyleSheets.reboot,
      css.CSSStyleSheets.utilities,
      css.CSSStyleSheets.alert,
      css.CSSStyleSheets.badge,
      css.CSSStyleSheets.buttons,
      `.aaa{
        color:red;
      }`,
    ];

    render() {
      return (
        <>
          <oi-alert closeable theme-color="success">
            A simple alert—check it out!
            <span className="aaa">style test,slot 的樣式是當前元素賦予</span>
          </oi-alert>
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          {themeColors.map((color) => (
            <div class={`alert alert-${color}`} role="alert">
              A simple {color} alert—check it out!
            </div>
          ))}

          <button type="button" class="btn btn-primary">
            Notifications <span class="badge bg-secondary">4</span>
          </button>
          <button type="button" class="btn btn-primary position-relative">
            Inbox
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
        </>
      );
    }
  }
);
export default (
  <>
    <oi-tab
      items={[
        {
          nav: "oi-alter",
          pane: (
            <>
              <oi-alert closeable theme-color="success">
                A simple alert—check it out!
                <span className="aaa">style test</span>
              </oi-alert>
              {themeColors.map((color) => (
                <oi-alert theme-color={color}>
                  A simple {color} alert—check it out!
                </oi-alert>
              ))}
            </>
          ),
        },
        {
          nav: "html+css",
          pane: <App />,
        },
      ]}
    />
  </>
);
