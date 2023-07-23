interface FreeCounterProps {
  apiLimitCount: number;
}

const FreeCounter = ({ apiLimitCount }: FreeCounterProps) => {
  return <div>free{apiLimitCount}</div>;
};

export default FreeCounter;
