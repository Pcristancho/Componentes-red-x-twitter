import { useState } from 'react';
import AppStyles from './TwitterCard.module.css'


export function TwitterCard({Nombre,correo}){
    const [isFollowing,setIsFollowing]=useState(false) //useState devuleve 2 cosas [valor de estado, funcion para lmodificar estado]


    console.log(isFollowing);
    const  text= isFollowing ?  'Siguiendo' : 'Seguir';
    // const buttonClassName= isFollowing ? 'siguiendo' : 'boton'
    let buttonClassName;
    if (isFollowing){
        buttonClassName=AppStyles.siguiendo +" "+ AppStyles.boton; //añade la clase base para boton y le añade el caso cuando esta siguiendo 
    }else{
        buttonClassName=AppStyles.boton;
    }

    return(
        <article className={AppStyles.articulos}>
            <header className={AppStyles.cabecera}>
                <img src={`./src/img/foto-${Nombre}.png`} className={AppStyles.avatar} alt='El avatar del usuario'></img>
                <div className={AppStyles.info}>
                    <strong>{Nombre}</strong>
                    <span className={AppStyles.Sspan}>{correo}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={()=>{setIsFollowing(!isFollowing)}}  >
                    <span className={AppStyles.textoBoton} >{text}</span>
                    <span className={AppStyles.pararSeguir}>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}