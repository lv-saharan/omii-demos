import { h, Component, uniqueTag } from "omii";
import { sortable, css } from "omii-ui";

let nodes = [
  {
    key: "node-1",
    label: "節點1",
  },
  {
    key: "node-2",
    label: "節點2",
    expanded: true,
    children: [
      {
        key: "child-1",
        label: "子節點1",
        allowCheck: false,
      },
      {
        key: "child-2",
        label: "子節點2",
        disabled: true,
        children: [
          {
            key: "cc-1",
            label: "孫節點1",
          },
          {
            key: "cc-2",
            label: "孫節點2",
          },
        ],
      },
    ],
  },
  {
    key: "node3",
    element: <b>節點3</b>,
    children: (node, props, treeNode) => {
      if (!node.__children) {
        setTimeout(() => {
          node.__children = [
            {
              key: "child-3",
              label: "子節點1",
            },
            {
              key: "child-4",
              label: "子節點2",
            },
          ];
          treeNode.update();
        }, 3000);

        return (
          <oi-loading
            name="ball-fall"
            size=".5"
            style={{ "padding-left": treeNode.level + 1 + "rem" }}
          />
        );
      } else {
        return node.__children;
      }
    },
  },
];

const App = uniqueTag(
  class extends Component {
    static css = css.getCSSStyleSheets(
      "reboot",
      "tables",
      "utilities",
      "close",
      "scrollbar"
    );
    css = `
    .sortable-ghost{
        outline:#00FF00 dotted thick;
    }
    .sortable-drag{
        color:red;
    }
    `;
    async installed() {
      const Sortable = await sortable.use();
      Sortable.create(this.$(".table>tbody"), {
        // Element dragging ended
        onEnd: (/**Event*/ evt) => {
          console.log(evt);
          console.log(
            "new orders",
            this.$$(".table>tbody>tr").map((tr) => tr.dataset.index)
          );
        },
      });
    }
    render() {
      return (
        <>
          <table class="table">
            <tbody>
              {Array.from({ length: 10 }).map((v, index) => (
                <tr data-index={index}>
                  <td>{index + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1>Sortable TREE</h1>
          <oi-tree
            nodes={nodes}
            sortable
            onSorted={(evt) => {
                //从from 里删除，在to里面加入即可
              console.log("tree sorted", evt);
            }}
            css={`
              :host {
                --oi-tree-node-color: red;
              }
            `}
          />
        </>
      );
    }
  }
);
export default <App />;
