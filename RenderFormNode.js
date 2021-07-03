//Module RenderFormNode render the inputs,selects,check,etc of the form
export default function RenderFormNode(props) {
  const d = document;

  //funtions
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  //definition of necessary variables and create nodes
  const { name, type, label, options, placeholder } = props,
    $fragment = d.createDocumentFragment(),
    $labelNodeForm = d.createElement("label"),
    $noInputs = ["select", "textarea"],
    $groupElemets = ["radio", "checkbox"];
  //Node defined with led to create the type of element later
  let $nodeForm = null;

  //assign attributes to label and add it to the Fragment
  $labelNodeForm.innerHTML = label?label:name;
  $labelNodeForm.setAttribute("for", $groupElemets.includes(type) ? "" : name);
  $fragment.appendChild($labelNodeForm);

  //creation the node, assign attributes and add it to the Fragment
  console.log(options);
  if ($noInputs.includes(type)) {
    $nodeForm = d.createElement(type);
    $nodeForm.name = name;
    $nodeForm.id = name;
  } else {
    if ($groupElemets.includes(type)) {
        $nodeForm=d.createDocumentFragment();
      options.forEach((option) => {
        const $labelOption = d.createElement("label"),
          $nodeOption = d.createElement("input");
        $labelOption.setAttribute("for", option.value);
        $labelOption.innerHTML = option.text
          ? option.text
          : capitalize(option.value);

        $nodeOption.type = type;
        $nodeOption.name = name;
        $nodeOption.id = option.value;
        $nodeOption.value = option.value;

        $nodeForm.appendChild($labelOption);
        $nodeForm.appendChild($nodeOption);
      });
    } else {
      $nodeForm = d.createElement("input");
      $nodeForm.type = type ? type : "text";
      if (placeholder) $nodeForm.placeholder = placeholder;
    }
  }

  $fragment.appendChild($nodeForm);

  return $fragment;
}
