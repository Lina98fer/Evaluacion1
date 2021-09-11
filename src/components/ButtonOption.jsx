import React from "react";
import PropTypes from "prop-types";

const ButtonOption = ({nameButton, labelButton, testFunction, idDatos}) => {
    const handlerButton = event => {
        const option = event.target.name;
        const id= event.target.value;
        testFunction (option,id);
    };
    <button
        onClick={() => {
            handlerButton();
        }}
        name = {nameButton}
        id = {idDatos}
    >
        <label text ={labelButton}></label>
    </button>

}
ButtonOption.PropTypes ={
    nameButton:PropTypes.string.isRequired,
    labelButton:PropTypes.string.isRequired,
    testFunction:PropTypes.func.isRequired,
    idDatos:PropTypes.string.isRequired,
}


export default ButtonOption;