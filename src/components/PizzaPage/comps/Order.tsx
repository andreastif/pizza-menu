export const Order = ({ ...props }: { closeHour: number }) => {
  return (
    <div>
      <p>{`We're open until ${props.closeHour}:00. Come visit us or order online!`}</p>
      <button className="btn mt-4 bg-yellow-400 hover:bg-yellow-400/70 hover:border-yellow-400/70">Order now</button>
    </div>
  );
};
