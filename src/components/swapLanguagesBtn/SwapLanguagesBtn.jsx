import React from "react";
import swapStyles from "./swap.module.css";
import { swapLanguages } from "../../state/slices/translatorSlice";
import { useDispatch } from "react-redux";

function SwapLanguagesBtn({ translatedText }) {
  const dispatch = useDispatch();

  return (
    <i
      className={`fas fa-exchange-alt ${swapStyles.iconButton}`}
      onClick={(e) => dispatch(swapLanguages(translatedText))}
    ></i>
  );
}

export default SwapLanguagesBtn;
