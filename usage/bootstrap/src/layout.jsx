const { h, define, Component, classNames, uniqueTag, createRef } = omii;
const {
  css: { getCSSStyleSheets },
} = omii.ui;
import layoutCSS from "./layout.scss";
const App = uniqueTag(
  class extends Component {
    static css = [
      getCSSStyleSheets("reboot", "utilities", "scrollbar"),
      layoutCSS,
    ];

    layoutRef = createRef();
    render() {
      return (
        <oi-layout ref={this.layoutRef}>
          <div slot="header">
            <ul>
              <li>
                <oi-icon name="code" />
              </li>
              <li>文件</li>
              <li>编辑</li>
              <li>选择</li>
              <li>查看</li>
            </ul>
            <div
              class="position-absolute  top-100 start-50 translate-middle-x"
              style={{ "z-index": 1 }}
            >
              <button
                onClick={(evt) => {
                  this.layoutRef.current.toggleHeader();
                }}
              >
                close header
              </button>
            </div>
          </div>
          <div slot="content">内容部分！</div>
          <div slot="left">
            <ul>
              {Array.from({ length: 120 }).map((v, index) => (
                <li>menu : {index + 1}</li>
              ))}
            </ul>
            <div class="tools">
              <ul>
                <li>
                  <oi-icon
                    name="file_copy"
                    onClick={(evt) => {
                      this.layoutRef.current.toggleLeft();
                    }}
                  />
                </li>
                <li>
                  <oi-icon name="search" />
                </li>
                <li>
                  <oi-icon name="lock_person" />
                </li>
                <li>
                  <oi-icon name="access_alarm" />
                </li>
                <li>
                  <oi-icon name="adf_scanner" />
                </li>
                <li>
                  <oi-icon name="apps" />
                </li>
              </ul>
            </div>
          </div>
          <div slot="right">
            <ul>
              {Array.from({ length: 120 }).map((v, index) => (
                <li>menu : {index + 1}</li>
              ))}
            </ul>
            <div
              class="position-absolute top-50 end-100 translate-middle-y"
              style="z-index:10"
            >
              <button
                onClick={(evt) => {
                  this.layoutRef.current.toggleRight();
                }}
              >
                close right
              </button>
            </div>
          </div>
        </oi-layout>
      );
    }
  }
);

const App2 = uniqueTag(
  class extends Component {
    static css = [getCSSStyleSheets("reboot", "utilities", "scrollbar")];
    css = `
          :host{
            color:white;
          }
          oi-layout{
              background-color:#2d2d2d;
          }
          button{
              padding:0;
              margin:0;
              border:0;
          }
          [slot=footer], [slot=header]{
              height:3rem;
              background-color:#323233;
              
          }
          [slot=header] li{
              list-style:none;
              display:inline-block;
              color:white;
              margin:.5rem 1rem;
  
          }
          [slot=left]{
              width:20rem;
              height:100%;
              background:#252526;
              color:white;
          }
          [slot=right]{
            width:20rem;
            height:100%;
            background:#252526;
            color:white;

          }
          [slot=left] ul{
              height:100%;
              overflow:auto;
          }
          
       
          [slot=right]>ul{
              height:100%;
              overflow:auto;
          }
          [slot=content]{
            background:#ccc;
            height:100%;
            overflow:auto;
          }

      `;
    layoutRef = createRef();
    render() {
      return (
        <oi-layout ref={this.layoutRef}>
          <div slot="header">
            <ul>
              <li>
                <oi-icon name="code" color="#39A7F1" />
              </li>
              <li>文件</li>
              <li>编辑</li>
              <li>选择</li>
              <li>查看</li>
            </ul>
            <div
              class="tools position-absolute  top-100 start-50 translate-middle-x"
              style={{ "z-index": 1 }}
            >
              <ul>
                <li>
                  <oi-icon name="file" />
                </li>
              </ul>
            </div>
          </div>
          <div slot="left">
            <ul>
              {Array.from({ length: 120 }).map((v, index) => (
                <li>menu : {index + 1}</li>
              ))}
            </ul>
            <div
              class="position-absolute top-50 start-100 translate-middle-y"
              style="z-index:10"
            >
              <button
                onClick={(evt) => {
                  this.layoutRef.current.toggleLeft();
                }}
              >
                close left
              </button>
            </div>
          </div>
          <div slot="content">some message</div>
          <div slot="right">
            <ul>
              {Array.from({ length: 120 }).map((v, index) => (
                <li>menu : {index + 1}</li>
              ))}
            </ul>
            <div
              class="position-absolute top-50 end-100 translate-middle-y"
              style="z-index:10"
            >
              <button
                onClick={(evt) => {
                  this.layoutRef.current.toggleRight();
                }}
              >
                close right
              </button>
            </div>
          </div>
          <div slot="footer">
            <div class="position-absolute bottom-100 start-50 translate-middle-x">
              <button
                onClick={(evt) => {
                  this.layoutRef.current.toggleFooter();
                }}
              >
                close footer
              </button>
            </div>
            这是一个Footer
          </div>
        </oi-layout>
      );
    }
  }
);

export default (
  <fieldset style="height:500px">
    <legend>布局 </legend>
    <App />
    <hr />
    <App2 />
  </fieldset>
);
