import React from "react";
import swapStyles from "./swap.module.css";
import { swapPanelsContent } from "../../state/slices/translatorSlice";
import { useDispatch, useSelector } from "react-redux";

function SwapLanguagesBtn() {
  const translatedText = useSelector((state) => state.translator.translatedText);
  const dispatch = useDispatch();

  return (
    <div className={swapStyles.swapBtnWrapper}>
      <i
        className={`fas fa-exchange-alt ${swapStyles.iconButton}`}
        onClick={(e) => dispatch(swapPanelsContent(translatedText))}
      ></i>
    </div>
  );
}

export default SwapLanguagesBtn;
