const { h, define, Component, classNames, uniqueTag } = omii;
const { css } = omii.ui;
const Slot = uniqueTag(
  class extends Component {
    static css = `:host{color:red}`;
    render() {
      return (
        <ul>
          {this.$props.files.map((file) => (
            <li>{file.name}</li>
          ))}
        </ul>
      );
    }
  }
);
const files = [];
const App = uniqueTag(
  class extends Component {
  
    render() {
      return (
        <>
          单选 <oi-uploader></oi-uploader>
          <hr />
          多选<oi-uploader files={files} multiple></oi-uploader>
          <hr />
          多选文件列表
          <oi-uploader files={files} multiple template="files" auto-upload action="http://127.0.0.1/upload"></oi-uploader>
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
