import React from "react";

const HighlightText = ({ text }) => {
  return (
    <span
      className="font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500
      bg-clip-text text-transparent"
    >
      {text}
    </span>
  );
};

export default HighlightText;

//==============ARROW FUNCN============
// export const HighlightText = ({text}) => {
//   return(
//     <div>

//     </div>
//   )
// }

//================Traditional funcn =================
// export function HighlightText(){
//   return(
//     <div>

//     </div>
//   )
// }
