import React,{useState,useEffect} from "react";

let url_data = new URLSearchParams(window.location.search)

let proessionDetails = async (g) => {
 
    try {
       // console.log(url_data.get('category'));
    // let data = await fetch("http://localhost:3333/serviceProfessional/?category=Electricians");
    let data = await fetch(`http://localhost:3333/serviceProfessional/?city=${url_data.get("city")}&category=${url_data.get("category")}`);
    data = await data.json();
    g(data)
    return data;
    }
    catch(err) {
      console.log(err);
     console.log('backend is not started');
      return {}
    }
  };
let professionalProfileDetails = async (g) => {
   
    try {
      // let data = await fetch("http://localhost:3333/professionalProfile/?category=Electrician");
    let data = await fetch(`http://localhost:3333/professionalProfile/?category=${url_data.get("category")}`);

    data = await data.json();
    g(data)
    return data;
   }
   catch(err) {
     console.log(err);
     console.log('backend is not started');

     return {}
   }
  };

let init=[{
    "city": "",
    "category": "",
    "dashboard": [''],
    "numOfProf": 0,
    "faqs": [],
     "aboutProf":  [],
     "ratingStatus":[""],
   "needfor":[""]
}]
let initProfileD=[{ 
    "name": "",
    "profilePicLink":"",
   "address":"",
   "rating": "",
   "totalRating":"" ,
   "noOf5Satr": "",
   "commets": [["","",""]]
   
}]
export const Authcontext=React.createContext({init})
export const AuthcontextProfessionalProfileDetails=React.createContext({init})


export const AuthcontextProvider= (props)=>{

    const [state, setstate] = useState(init)
    const [profileD, setProfileD] = useState(initProfileD)


    // console.log(url_data.get("category"));
    useEffect(() => {
        proessionDetails(setstate)
        professionalProfileDetails(setProfileD)
    }, []);

    return (
    <AuthcontextProfessionalProfileDetails.Provider value={profileD}>
        <Authcontext.Provider value={state}>
        {props.children}
        </Authcontext.Provider>
    </AuthcontextProfessionalProfileDetails.Provider>)
}

// export default Authcontext
