interface CountDispalProps {
  count: number;
}

const CountDisplay = ({ count }: CountDispalProps) => {
  return <div>Value : {count}</div>;
};

export default CountDisplay;
