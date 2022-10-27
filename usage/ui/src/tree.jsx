const { h, define, Component } = omii;

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

let selectedKeys = ["child-1", "node-1"];
let checkedKeys = ["node-1", "child-4"];
let radioedKey = "node-1";
define(
  "tree-demo",
  class extends Component {
    render() {
      return (
        <oi-tab
          items={[
            {
              nav: "一般用法",
              pane: <oi-tree nodes={nodes} />,
            },
            {
              nav: "设置选中行",
              pane: (
                <oi-tree
                  multi-select
                  selectedKeys={selectedKeys}
                  nodes={nodes}
                  css={`
                    :host {
                      --oi-tree-node-color: red;
                    }
                  `}
                />
              ),
            },
            {
              nav: "多选",
              pane: () => (
                <>
                  选中的Keys：
                  <ol>
                    {checkedKeys.map((key) => (
                      <li>{key}</li>
                    ))}
                  </ol>
                  <hr />
                  <oi-tree
                    onNodeCheck={(evt) => {
                      this.updateTargets("oi-tab");
                    }}
                    onNodeUnCheck={(evt) => {
                      this.updateTargets("oi-tab");
                    }}
                    checkbox-tree
                    checkedKeys={checkedKeys}
                    nodes={nodes}
                  />
                </>
              ),
            },
            {
              nav: "单选,node 样式注入,可以是任意的可以转换成CSSStyleSheet的",
              pane: () => (
                <>
                  选中的Key：{radioedKey}
                  <hr />
                  <oi-tree
                    node-css=".element{font-size:3rem !important;}[type=radio]{width:3rem !important;height:3rem !important;}"
                    radio-tree
                    radioedKey={radioedKey}
                    nodes={nodes}
                    onNodeRadio={(evt) => {
                      radioedKey = evt.detail.node.key;
                      this.updateTargets("oi-tab");
                    }}
                  />
                </>
              ),
            },
          ]}
        />
      );
    }
  }
);
export default (
  <fieldset>
    <legend>
      <h1>Tree Control</h1>
    </legend>
    <tree-demo />
  </fieldset>
);
