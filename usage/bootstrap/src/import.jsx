const { h, define, Component, classNames, uniqueTag, createRef } = omii;

export default (
  <fieldset style="height:500px">
    <legend>导入 </legend>
    <oi-import
      src={new URL("../remote/index.js", import.meta.url).href}
      module="welcome"
    />
    <hr />
    <oi-import
      src={new URL("../remote/index.js", import.meta.url).href}
      module="user"
    />
    <hr />

    <oi-import
      src={new URL("../remote/index.js", import.meta.url).href}
      module="tag"
    />
    <hr />
  </fieldset>
);
