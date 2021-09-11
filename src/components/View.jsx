import React from "react";
import ButtonOption from "./ButtonOption";
import datos from "./data.json"

 const View = (objet) =>{
        <label text ={datos.historia}>
        </label>

        objet.datos.opciones.map((item) =>
            <ButtonOption key={item.opciones}
            nameButton = {item.key}
            onclick = {this.props.testFunction()}
            />
        
        )
    }


export default View;