import RenderFormNode from "./RenderForms.js";

const $app=document.getElementById("app");

let $node=RenderFormNode({
    name:"nombre",
    type:"text",
    label:"Ingresa tu nombre",
    placeholder:"Ingresa tu nombre",
})
let $node2=RenderFormNode({
    name:"celular",
    type:"date",
    label:"Ingresa tu cumple",
})
$app.appendChild($node2);