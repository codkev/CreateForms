import RenderFormNode from "./RenderFormNode.js";

const $app = document.getElementById("app").querySelector("form");

let $node2 = RenderFormNode({
    name: "lenguajes web",
    type: "checkbox",
    label: "Selecciona un lenguaje <br>",
    options: [
      {
        value: "css",
        text: "css",
        id: "checkCss",
      },
      {
        value: "JavaCript",
        text: "JavaCript",
        id: "checkJs",
      },
      {
        value: "html",
        text: "html",
        id: "checkHtlm",
      },
    ],
  }),
  pregunta1 = RenderFormNode({
    type: "radio",
    label: "<br>Lenguajes Web<br>",
    options: [
      "Css",
      "Html",
      "JavaScritp",
      {
        value: "react",
        text: "React js",
      },
    ],
  }),
  pregunta2 = RenderFormNode({
    name: "nombre",
    label: "<br>Escribe tu nombre<br>",
    value:"kevin",
    placeholder:"Ej: Juan perez"
  }),
  select = RenderFormNode({
    name: "mes",
    type: "select",
    label: "<br>Selecione un mes<br>",
    placeholder:"Selecciona un mes",
    options: ["Enero", "Febrero", "Marzo", "Junio", "Julio"],
  }),
  range = RenderFormNode({
    name: "animo",
    type: "range",
    value: 10,
  }),
  comentario = RenderFormNode({
    name: "comentario",
    type: "textarea",
    placeholder:"Deja un comentario",
    label: "<br>Ingresa un comentario<br>",
  }),
  butoon = RenderFormNode({
    name: "enviar",
    type: "submit",
  });
$app.appendChild($node2);
$app.appendChild(pregunta1);
$app.appendChild(pregunta2);
$app.appendChild(select);
$app.appendChild(comentario);
$app.appendChild(range);
$app.appendChild(butoon);
