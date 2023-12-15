import React from "react";
import styles from './AccueilPage.module.css';
import H1Text from "../../components/texts/H1Text";
import PText from "../../components/texts/PText";
import { texts } from "../../textValues/textLists";
import parseTextWithLineBreaks from "../../utils/parseTextWithLineBreaks";
import { colors } from "../../style/color";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import BottomNavbar from "../../components/navbar/BottomNavbar";

const AccueilPage = () => {
		

    return (
        <div className={styles.accueilBody}>
          <div className={styles.accueilH1Text}>
				    <H1Text	text="Let's	go !"	color={colors.lightlightGrey}/>
          </div>
          <div	className={styles.accueilCenterDiv}>
            <div className={styles.accueilPText}>
              <PText text={parseTextWithLineBreaks(texts.travailQuotidien)} color={colors.lightlightGrey}/>
            </div>
					  <PrimaryButton	buttonText='Create'	width='90%'	height='65px'/>
          </div>
          <div>
            <BottomNavbar/>
          </div>
        </div>
      );
};

export default AccueilPage;
