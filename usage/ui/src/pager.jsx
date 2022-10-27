const { h } = omii;
export default (
  <div>
    <oi-pagination page-count="100" />
    <oi-pager
      total="1000"
      createInfo={(props, pager) => {
        let { pageNum } = props;
        let { pageCount } = pager;
        return (
          <div class="info">
            <span class="curr">當前{pageNum}</span>/
            <span class="total">總共{pageCount}</span>
          </div>
        );
      }}
    />
    <oi-pager
      css={`
        :host {
          --oi-pager-page-bgcolor: #eee;
        }
      `}
      page-count="100"
      prev-text="上一頁"
      next-text="下一頁"
    />

    <oi-pager total="100" page-num="5" />
    <oi-pager
      total="10"
      page-size="2"
      onPaged={(evt) => {
        alert(evt.detail);
      }}
    />
    <oi-pager total="1" />
    {Array.from({ length: 100 }).map((v, i) => {
      return (
        <div>
          <oi-pager
            css={`
              :host {
                --oi-pager-page-bgcolor: #eee;
              }
            `}
            page-count={i}
            prev-text="上一頁"
            next-text="下一頁"
          />
        </div>
      );
    })}
  </div>
);
