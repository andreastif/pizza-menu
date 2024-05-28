interface hours {
  closeHour: number;
  openHour: number;
  //add more if needed
}

export const Order = ({ closeHour, openHour }: hours) => {
  return (
    <div>
      <p>{`We're open from ${openHour}:00 until ${closeHour}:00. Come visit us or order online!`}</p>
      <button className="btn mt-4 bg-yellow-400 hover:bg-yellow-400/70 hover:border-yellow-400/70">Order now</button>
    </div>
  );
};
