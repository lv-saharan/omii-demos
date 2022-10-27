const { h } = omii;
export default (
  <fieldset>
    <legend>
      <h1>rate</h1>
    </legend>
    <oi-rate max-score="6" score="2" />
    <button>
      <oi-rate max-score="6" score="2.5" color="blue" size=".8" />
    </button>
    <h3>
      <oi-rate score="6" init-score="2.4" color="pink" /> pink rate
    </h3>
    <div>
      <oi-rate
        // onTryRate={(e) => {
        //   console.log("try rate", e.detail);
        // }}
        onRate={(e) => {
          alert(e.detail);
        }}
        score={1}
        rateable
        max-score="10"
        size="2"
        color="red"
      ></oi-rate>
    </div>

    <div>
      <oi-rate
        css={`
          :host{
            --oi-icon-color:yellow;
          }
          :host .rate-1{
            --oi-icon-color:gray;
          }
          :host .rate-2{
            --oi-icon-color:yellow;
          }
          :host .rate-3{
            --oi-icon-color:green;
          }
          :host .rate-4{
            --oi-icon-color:blue;
          }
          :host .rate-5{
            --oi-icon-color:red;
            --oi-icon-width:1.1rem;
            --oi-icon-height:1.1rem;
          }
        `}
        onRate={(e) => {
          alert(e.detail);
        }}
        score={5}
        rateable
        max-score="5"
      ></oi-rate>
    </div>
  </fieldset>
);
