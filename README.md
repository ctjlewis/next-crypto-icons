# Crypto Icons for Next.js

Uses the [`cryptocurrency-icons`
package](https://github.com/spothq/cryptocurrency-icons) package, served from the
[JsDelivr CDN](https://www.jsdelivr.com/package/npm/cryptocurrency-icons), to
render a cryptocurrency icon easily.

Given a `name`, `style`, and `size`, the `<CryptoIcon />` component will render
a `next/image` with a given `{ width, height } = size` and a `src` of:

```ts
`https://cdn.jsdelivr.net/npm/cryptocurrency-icons@latest/svg/${style}/${name}.svg`;
```

## Example

```tsx
// from demo/index.tsx

const DemoHome = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <CryptoIcon name="btc" />
      <CryptoIcon name="eth" />
      <CryptoIcon name="sol" />
    </div>
  );
};

export default DemoHome;
```

Renders the following 3 icons:

<img width="32" height="32"
  src="https://cdn.jsdelivr.net/npm/cryptocurrency-icons@latest/svg/black/btc.svg"
/>

<img width="32" height="32"
  src="https://cdn.jsdelivr.net/npm/cryptocurrency-icons@latest/svg/black/eth.svg"
/>

<img width="32" height="32"
  src="https://cdn.jsdelivr.net/npm/cryptocurrency-icons@latest/svg/black/sol.svg"
/>
