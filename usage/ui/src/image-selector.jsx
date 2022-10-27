const { h, createRef } = omii;
import "omii-ui";

let images = []
export default (
  <>
    <h2>圖片選擇</h2>
    <oi-image-selector />
    <h2>圖片多選</h2>
    <oi-image-selector multiple />
    <h3>自定義樣式</h3>
    <oi-image-selector multiple images={images} render-func={(props, selector) => <>
      <label for={selector.fileInputId}>click to select </label>
      <ul>
        {images.map((img, index) => <li>{index}:{img.file.name}  <button
          class="remove"
          onclick={(evt) => {
            selector.remove(index);
            evt.preventDefault();
            evt.stopPropagation();
          }}
        >X</button></li>)}
      </ul>
    </>}>


    </oi-image-selector>
  </>
);
