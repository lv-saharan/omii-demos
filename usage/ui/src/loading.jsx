const { h, define, Component } = omii;
export default (
  <fieldset>
    <legend>Loading Effect</legend>
    <h3>
      <a href="https://juejin.cn/post/7037036742985121800#heading-1">
        Loading 的一些效果
      </a>
    </h3>
    <ol>
      <li>
        circle:
        <oi-loading name="circle" />
      </li>
      <li style="line-height:2rem;">
        circle: 大小不设定可以根据父元素大小确定
        <oi-loading name="circle" />
      </li>
      <li>
        circle: Size 1.5rem，使用rem倍数
        <oi-loading name="circle" size="1.5" color="red"/>
        <oi-loading name="circle" size="1.5" color="green"/>
        <oi-loading name="circle" size="1.5" color="blue"/>
        <oi-loading name="circle" size="1.5" color="pink"/>
      </li>
      <li>
        arrow circle:
        <oi-loading name="arrow-circle" />
      </li>
      <li>
        ball-scale:
        <oi-loading name="ball-scale" />
      </li>
      <li>
        ball-fall:
        <oi-loading name="ball-fall" />
      </li>
      <li>
        rectangle:
        <oi-loading name="rectangle" />
      </li>
    </ol>
  </fieldset>
);
