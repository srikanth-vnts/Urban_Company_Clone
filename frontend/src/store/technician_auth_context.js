import React,{useState} from "react";

let initial={ techpageload:false,settechpageload:()=>{}}
export const TechnicianAuthcontext=React.createContext(initial)


export const TechnicianAuthcontextProvider= (props)=>{

    const [state, setstate] = useState({ techpageload:false,settechpageload:()=>{}})
    // state.settechpageload()

    return (
        <TechnicianAuthcontext.Provider value={{
            techpageload:state.techpageload,
            settechpageload:(p)=>{
                setstate({techpageload:p,settechpageload:()=>{}})
            }
        }
        }>
        {props.children}
        </TechnicianAuthcontext.Provider>)
}

// export default Authcontext
