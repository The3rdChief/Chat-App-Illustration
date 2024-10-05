/* eslint-disable react/prop-types */
function Pricing(props) {
  return (
    <div className="rounded-2xl p-3 w-[75%] flex items-center gap-2 rounded-bl-sm bg-gradient-to-r from-gdMagenta to-gdViolet">
      <div className="size-5 border rounded-full"></div>
      <p className="flex-1 text-xs text-slate-100">{props.duration}</p>
      <p className="text-lg font-semibold text-white">{props.price}</p>
    </div>
  );
}

export default Pricing;
