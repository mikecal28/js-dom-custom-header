const rootDiv = document.createElement("div");
rootDiv.id = "root";

const textNode = document.createTextNode("Hello");

const customH1 = document.createElement("h1");
customH1.id = "customH1";
const customH2 = document.createElement("h2");
customH2.id = "customH2";
const customH3 = document.createElement("h3");
customH3.id = "customH3";
const customH4 = document.createElement("h4");
customH4.id = "customH4";
const customH5 = document.createElement("h5");
customH5.id = "customH5";
const customH6 = document.createElement("h6");
customH6.id = "customH6";

const textInput = document.createElement("input");
textInput.id = "textInput";
textInput.placeholder = "Enter heading text...";

const sizeSelect = document.createElement("select");
sizeSelect.id = "sizeSelect";
option1 = document.createElement("option");
option2 = document.createElement("option");
option3 = document.createElement("option");
option4 = document.createElement("option");
option5 = document.createElement("option");
option6 = document.createElement("option");
option1.text = "h1";
option2.text = "h2";
option3.text = "h3";
option4.text = "h4";
option5.text = "h5";
option6.text = "h6";
sizeSelect.add(option1);
sizeSelect.add(option2);
sizeSelect.add(option3);
sizeSelect.add(option4);
sizeSelect.add(option5);
sizeSelect.add(option6);

document.body.appendChild(rootDiv);
rootDiv.appendChild(sizeSelect);
rootDiv.appendChild(textInput);
rootDiv.appendChild(customH1);
customH1.appendChild(textNode);

const renderElement = (element) => {
  if (element === "size") {
    currentHTag = rootDiv.lastElementChild;
    switch (sizeSelect.value) {
      case "h1":
        rootDiv.replaceChild(customH1, currentHTag);
        customH1.appendChild(textNode);
        break;
      case "h2":
        rootDiv.replaceChild(customH2, currentHTag);
        customH2.appendChild(textNode);
        break;
      case "h3":
        rootDiv.replaceChild(customH3, currentHTag);
        customH3.appendChild(textNode);
        break;
      case "h4":
        rootDiv.replaceChild(customH4, currentHTag);
        customH4.appendChild(textNode);
        break;
      case "h5":
        rootDiv.replaceChild(customH5, currentHTag);
        customH5.appendChild(textNode);
        break;
      case "h6":
        rootDiv.replaceChild(customH6, currentHTag);
        customH6.appendChild(textNode);
        break;
    }
  } else if (element === "text") {
    textNode.nodeValue = textInput.value;
  }
};

sizeSelect.addEventListener("change", (e) => {
  renderElement("size");
});

textInput.addEventListener("input", (e) => {
  renderElement("text");
});
