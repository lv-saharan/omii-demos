const { h, Component, define } = omii;

class Test extends Component {
  css = `:host{
    display:block;
    width:500px;
  }
  .item{
    padding:3px 5px;
    background:lightblue;
    margin:3px;
    white-space:nowrap;
  }  
  `;
  render() {
    return (
      <>
        <oi-marquee offset-percentage="0" speed="80">
          <div className="item">1 hello</div>
          <div className="item">2 world </div>
          <div className="item">3 !</div>
        </oi-marquee>

        <oi-marquee offset-percentage=".5" speed="20">
          Determines how values are combined between this animation and other,
          separate animations that do not specify their own specific composite
          operation. Defaults to replace.
        </oi-marquee>

        <oi-marquee offset-percentage=".5" speed="20" hover-pause="false">
          123 ---------------567 <div className="item">890</div>
        </oi-marquee>

        <hr />
        <oi-marquee direction="left" offset-percentage=".5" speed="20">
          你好，世界！
        </oi-marquee>
        <oi-marquee direction="right" offset-percentage=".5" speed="20">
          <div style=" direction: rtl; unicode-bidi: bidi-override; ">
            你好，世界！
          </div>
        </oi-marquee>

        <oi-marquee offset-percentage="0" direction="right" speed="80">
          <div className="item">1 hello</div>
          <div className="item">2 world </div>
          <div className="item">3 !</div>
        </oi-marquee>

        <oi-marquee direction="up" speed="20" style="height:100px;">
          <div style="width:200px;height:50px;background:red;">hello</div>
          <div style="width:200px;height:50px;background:green;">world</div>
          <div style="width:200px;height:30px;background:blue;">！</div>
        </oi-marquee>

        <hr></hr>
        <oi-marquee
          direction="up"
          speed="20"
          style="height:200px;width:2em;font-size:2em;"
        >
          中 华 人 民 共 和 国
        </oi-marquee>

        <oi-marquee
          direction="down"
          speed="20"
          style="height:200px;width:2em;font-size:2em;"
        >
          中 华 人 民 共 和 国
        </oi-marquee>
      </>
    );
  }
}
define("marquee-test", Test);
export default (
  <fieldset>
    <legend>Marquee</legend>

    <marquee-test></marquee-test>
  </fieldset>
);
