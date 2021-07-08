//Module RenderFormNode render the inputs,selects,check,etc of the form
//funtions
const d = document;
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
export default function RenderFormNode(props) {

  //definition of necessary variables and create nodes
  const { name, type, label, placeholder,  value, options } = props,
    $fragment = d.createDocumentFragment(),
    $labelNodeForm = d.createElement("label"),
    $noInputs = ["select", "textarea"],
    $groupElemets = ["radio", "checkbox"];
  // validations 
  if(!name){
    var error = new Error('name is undefined, name is required');
    console.error(error);
    return d.createTextNode("Error: name is undefined");
  }


  //Node defined with led to create the type of element later
  let $nodeForm = null;

  //assign attributes to label and add it to the Fragment
  $labelNodeForm.innerHTML = label ? label : name;
  $labelNodeForm.setAttribute("for", $groupElemets.includes(type) ? "" : name);
  $fragment.appendChild($labelNodeForm);

  //creation the node, assign attributes and add it to the Fragment
  //create of elements no inputs
  if ($noInputs.includes(type)) {
    $nodeForm = d.createElement(type);
    $nodeForm.name = name;
    $nodeForm.id = name;
    $nodeForm.placeholder=placeholder||"";
    if (type === "textarea") {
      if(options){
        $nodeForm.rows=options.rows||options[0];
        $nodeForm.cols=options.cols||options[0];
      }
    }
    if (type === "select") {
      options.forEach((option) => {
        let optValue = option.value || option.toLowerCase(),
          optText = option.text || capitalize(optValue),
          $option = d.createElement("option");

        $option.value = optValue;
        $option.innerHTML = optValue;
        $nodeForm.appendChild($option);
      });
    }
  } else {
    //create of checkboxs and radiobuttons "groupElements"
    if ($groupElemets.includes(type)) {
      $nodeForm = d.createDocumentFragment();
      options.forEach((option) => {
        let optValue = option.value || option.toLowerCase(),
          optText = option.text || capitalize(optValue),
          optId = option.id || optValue;

        const $labelOption = d.createElement("label"),
          $nodeOption = d.createElement("input");
        $labelOption.setAttribute("for", optId);
        $labelOption.innerHTML = optText;

        $nodeOption.type = type;
        $nodeOption.name = name;
        $nodeOption.id = optId;
        $nodeOption.value = optValue;

        $nodeForm.appendChild($labelOption);
        $nodeForm.appendChild($nodeOption);
      });
    } else {
      //render of elemets input
      $nodeForm = d.createElement("input");
      $nodeForm.type = type || "text";
      $nodeForm.value = value || "";
      if (placeholder) $nodeForm.placeholder = placeholder;
    }
  }

  $fragment.appendChild($nodeForm);

  return $fragment;
}
