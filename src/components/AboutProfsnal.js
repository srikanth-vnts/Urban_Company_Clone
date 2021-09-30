import style from "../styles/aboutProfsnal.module.css";
import Card from "./Card";

let tabs = [
  [
    "Hire Electrician in Bangalore",
    `Now decades since the invention of electricity, it is just impossible to even imagine even 10 minutes without it. Over so many years our need for electricity has multiplied and diversified. Any small breakdown or malfunction can affect our everyday schedule, jolting it to a standstill. In today's time where 24 hours don't seem enough, it becomes difficult to extract time to get such problems fixed.
Even searching for a reliable electrician becomes a task. At the same time, it remains highly unsafe to leave those wiring or faulty switches unattended. If you find yourself in such a situation, then Urban Company is the one stop that provides a solution for all your problems. Urban Company serves as a platform that connects you to the best professionals in near place according to the time convenient to you.`,
  ],[`What is offered?`,`Professionals at Urban Company provide you with basic electrical repairs such as fixing the wiring system or fans, switches, fuses, fancy light or meters. Whether it is a small repair or an appliance installation, Urban Company has you covered. Even shifting to a new space will be stress-free with our expert to take care of all your electrical needs while keeping your safety in mind.`],
  [`Why an Urban Company Electrician?`,`
The silicon valley of India keeps its IT profegsionals and aspiring entrepreneurs busy. It becomes technically impossible for them to free their schedule for a petty breakdown. This is the reason that Urban Company remains popular among the residents of Bangalore as it is hassle-free and secure.`,[`Insurance: We as a service provider feel responsible for your space and belongings that you entrust with us. Hence, we provide all our customers with insurance of up to Rs. 5,000 in case of any mishap.`,

`Post-service payment: We believe in a post-service payment format. After all your work is done and you are content with the service, we will send you a link via SMS and/or email to make the payment. The mode of payment is online.`,

`Experts: The professionals that we have on board with us are taken through a number of security and parameter checks. They are certified in their trade and are even trained and counselled further.`,

`Service guarantee: A facility that is unique to Urban Company is its 30-day service guarantee policy. If anything remains unsatisfactory, you just need to let us know within 30 days of the service. An expert will revisit and get the chore done free of cost.`]
],
[`You can also go through the same electricians services in Bangalore in other cities as well:`,``,[`Best Electricians services in Delhi`,
`Best Electricians services in Mumbai`
,`Best Electricians services in Hyderabad`
,`Best Electricians services in Kolkata`
,`Best Electricians services in Pune`
,`Best Electricians services in Ahmedabad`
,`Best Electricians services in Chennai`
,`Best Electricians services in Chandigarh`]]
];

function AboutProfsnal() {
  return (
    <>
      <Card>
          
        <div id={'aboutprofsnal_main'} className={style.heading}>All About Electrician</div>
        {tabs.map(el=><><div className={style.question}>{el[0]}</div>
        {el[2] && el[2].map(el =><li className={style.answer_points}>{el}</li>)}
        <div className={style.answer}>{el[1]}</div></>)}       
      </Card>
    </>
  );
}

export default AboutProfsnal;
