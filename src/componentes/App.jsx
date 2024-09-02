import AppStyes from "./App.module.css"

import { TwitterCard } from './TwitterCard';

let users= [
    {
        userName:"Jose Armando Morales Sanchez",
        userAddres:"@JoseaAA"
    },
    {
        userName:"Camilo Aragón",
        userAddres:"@CamiloAg"
    }
];

function App(){
    return(
        <>
        <section className={AppStyes.secciones}>
            {
            users.map((user,index)=>{
                return(
                <TwitterCard Nombre={user.userName} correo={user.userAddres} key={index}></TwitterCard>
                )
            })}
        </section>
        </>
    );
}
export default App;