import swapStyles from "./swap.module.css";
import { swapPanelsContent } from "../../../../store/features/translatorSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

function SwapLanguagesBtn() {
  const translatedText = useAppSelector((state) => state.translator.translatedText);
  const dispatch = useAppDispatch();

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
