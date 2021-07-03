import RenderFormNode from "./RenderFormNode.js";

const $app=document.getElementById("app").querySelector("form");


let $node2=RenderFormNode({
    name:"lenguajes web",
    type:"checkbox",
    label:"Selecciona un lenguaje <br>",
    options:[
        {
            value:"css",
            text:"css"
        },
        {
            value:"JavaCript",
            text:"JavaCript"
        },
        {
            value:"html",
            text:"html"
        },
    ]
}),
pregunta1=RenderFormNode({
    name:"edad",
    type:"radio",
    label:"<br>Elija su edad<br>",
    options:[
        {
            value:"0-10",
        },
        {
            value:"11-18",
        }
    ]
}),
butoon=RenderFormNode(
    {
        name:"enviar",
        type:"submit"
    }
);
$app.appendChild($node2);
$app.appendChild(pregunta1);
$app.appendChild(butoon);