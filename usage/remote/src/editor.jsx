import { h, Component, uniqueTag } from "omii";

const Part = uniqueTag(
  class extends Component {
    content = "hello！";
    render() {
      return (
        <div>
          <fieldset>
            <legend>default</legend>
            <oi-tinymce
              style="border:solid 1px #ccc;height:500px"
              value={this.content}
              onChange={(evt, target) => {
                this.content = target.value;
                this.update();
              }}
            ></oi-tinymce>
          </fieldset>
          <hr />
          <output>
            <textarea style="width:100%;height:300px">{this.content}</textarea>
          </output>
        </div>
      );
    }
  }
);

export default <Part />;
