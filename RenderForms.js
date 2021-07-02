//Module RenderFormNode render the inputs,selects,check,etc of the form
export default function RenderFormNode(props) {
  const d = document;

  //definition of necessary variables and create nodes
  const { name, type, label, options, placeholder } = props,
    $fragment = d.createDocumentFragment(),
    $nodeForm = d.createElement("input"),
    $labelNodeForm = d.createElement("label");

  //assign attributes to label and add it to the Fragment
  $labelNodeForm.innerHTML = label;
  $labelNodeForm.setAttribute("for", name);
  $fragment.appendChild($labelNodeForm);

  //assign attributes to node and add it to the Fragment
  $nodeForm.type = type ? type : "text";
  $nodeForm.name = name;
  $nodeForm.id = name;
  if (placeholder) $nodeForm.placeholder = placeholder;
  $fragment.appendChild($nodeForm);

  return $fragment;
  //    if($nodeForm==="radio"||$nodeForm==="checkbox")
}
