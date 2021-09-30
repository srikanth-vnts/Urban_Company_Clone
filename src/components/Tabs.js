import style from "../styles/tabs.module.css";
import AboutProfsnal from "./AboutProfsnal";
import Faq from "./Faq";
import HowItWork from './HowItWork'
import Professional from './Professional'


let tabs=[['How it Works','howitworks'],['Electricians','professional'],['FAQs','faqs'],['About Electricians','aboutprofsnal']]

let tabSelection=(e)=>{
  let element=e.target;
  if(element.id==='tabSelect' || !element.id)return;
  let x=element.parentElement.children;
  for(let i=0;i<x.length;i++)
  x[i].classList.remove(style.current_tab)
  element.classList.add(style.current_tab)
  let elmnt = document.getElementById(`${element.id}_main`);
  elmnt.scrollIntoView({behavior: 'smooth'});
}
let tabSelect_fix = ()=>{
  let tabfix = document.getElementById('tabSelect');
  let elmnt = document.getElementById('howitworks_main');
  let rect=elmnt.getBoundingClientRect();
  window.addEventListener('scroll',()=>{
    rect=elmnt.getBoundingClientRect();
    if(rect.y<150) tabfix.classList.add(style.tabSelect_active);
    else tabfix.classList.remove(style.tabSelect_active);
    // console.log(rect.y,window.innerHeight);
  });
}

function Tab() {
  setTimeout(tabSelect_fix,1000)
  return (
    <div className={style.tablayout}>
      <div id={'tabSelect'} className={style.tabSelect} onClick={tabSelection}>
    {tabs.map((el,i)=>
      <div className={i===0? style.current_tab : ''} id={el[1]} >{el[0]}</div>)}
    </div>
    <HowItWork/>
    <Professional/>
    <Faq/>
    <AboutProfsnal/>
    </div>
  )
}



export default Tab;
