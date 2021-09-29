import style from "../styles/tabs.module.css";
import Card from "./Card"
import Faq from "./Faq";
import HowItWork from './HowItWork'
import Professional from './Professional'


let tabs=['How it Works','Electricians','FAQs','About Electricians']

function Tab() {
  return (
    <div className={style.tablayout}>
    <div className={style.tabSelect}>
    {tabs.map(el=><div>{el}</div>)}
    </div>
    <HowItWork/>
    <Professional/>
    <Faq/>
    </div>
  )
}

export default Tab;
