const { h, define, Component, classNames, uniqueTag } = omii;
const { css } = omii.ui;

const items = [
  {
    href: "#/home",
    label: (
      <>
        <oi-icon name="home"></oi-icon>HOME
      </>
    ),
  },
  {
    href: "#library",
    label: (
      <>
        <oi-icon name="local_library" color="green"></oi-icon>LIBRARY
      </>
    ),
  },
  {
    label: (
      <>
        <oi-icon name="data_object" color="blue"></oi-icon>DATA
      </>
    ),
  },
];
const App = uniqueTag(
  class extends Component {
    static css = [css.CSSStyleSheets.reboot, css.CSSStyleSheets.breadcrumb];

    render() {
      return (
        <>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page">
                Home
              </li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>

          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Library</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Data
              </li>
            </ol>
          </nav>
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
          nav: "oi-breadcrumb",
          pane: (
            <>
              <oi-breadcrumb items={items} />
              <oi-breadcrumb items={items} divider="|" />
              <oi-breadcrumb items={items} divider=">" />
              <oi-breadcrumb items={items} divider="~" />
              <oi-breadcrumb
                items={items}
                divider={<oi-icon name="keyboard_arrow_right" />}
              />
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
