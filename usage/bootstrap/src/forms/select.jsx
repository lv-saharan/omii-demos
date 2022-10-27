const { h, define, Component, classNames, uniqueTag } = omii;
const { css } = omii.ui;

const App = uniqueTag(
  class extends Component {
    static css = css.getCSSStyleSheets("reboot", "forms");

    render() {
      return (
        <>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </>
      );
    }
  }
);
export default <App />;
