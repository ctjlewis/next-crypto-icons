import { CryptoIcon } from "../../src";

const DemoHome = () => {
  return (
    <div style={{
      display: 'flex',
      padding: '2rem',
      gap: '2rem',
      justifyContent: 'center'
    }}>
      <CryptoIcon name="btc" />
      <CryptoIcon name="eth" />
      <CryptoIcon name="sol" />
    </div>
  );
}

export default DemoHome;