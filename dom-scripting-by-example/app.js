document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrar");
  const mainDiv = document.querySelector(".main");
  const input = form.querySelector("input");
  const invitedList = document.getElementById("invitedList");

  const div = document.createElement("div");
  const filterLabel = document.createElement("label");
  const filterCheckBox = document.createElement("input");

  filterLabel.textContent = "Hide those who haven't responded";
  filterCheckBox.type = "checkbox";
  div.appendChild(filterLabel);
  div.appendChild(filterCheckBox);
  mainDiv.insertBefore(div, invitedList);
  filterCheckBox.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    const lis = invitedList.children;
    if (isChecked) {
      for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        if (li.className === "responded") {
          li.style.display = "";
          li.querySelector("label").style.display = "none";
        } else {
          li.style.display = "none";
        }
      }
    } else {
      for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        li.style.display = "";
        li.querySelector("label").style.display = "";
      }
    }
  });

  function createLI(text) {
    function createElement(elementName, property, value) {
      const element = document.createElement(elementName);
      element[property] = value;
      return element;
    }

    function appendToLI(elementName, property, value) {
      const element = createElement(elementName, property, value);
      li.appendChild(element);
      return element;
    }

    const li = document.createElement("li");
    appendToLI("span", "textContent", text);
    appendToLI("label", "textContent", "Confirm").appendChild(
      createElement("input", "type", "checkbox")
    );
    appendToLI("button", "textContent", "edit");
    appendToLI("button", "textContent", "remove");
    guestList.push(li);
    return li;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value;
    const errorMessage = document.querySelector(".errorMessage");
    if (text) {
      input.value = "";
      const li = createLI(text);
      invitedList.appendChild(li);
      if (errorMessage) {
        input.classList.remove("error");
        errorMessage.style.display = "none";
      }
    } else if (!text && !errorMessage) {
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("errorMessage");
      errorDiv.textContent = "Can't be blank";
      form.appendChild(errorDiv);
      input.classList.add("error");
    }
  });

  invitedList.addEventListener("change", (e) => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;
    const labelText = listItem.querySelector("label").firstChild;

    if (checked) {
      listItem.className = "responded";
      labelText.nodeValue = "Confirmed";
    } else {
      listItem.className = "";
      labelText.nodeValue = "Confirm";
    }
  });

  invitedList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const button = e.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      const action = button.textContent;
      // we add this object to make branching logic more readable. It replaces a standard if/else statement since each button text matches the property name of each item in the object already (remove, edit, save).
      const nameActions = {
        remove: () => {
          ul.removeChild(li);
        },
        edit: () => {
          const span = li.firstElementChild;
          const input = document.createElement("input");
          input.type = "text";
          input.value = span.textContent;
          li.insertBefore(input, span);
          li.removeChild(span);
          button.textContent = "save";
        },
        save: () => {
          const input = li.firstElementChild;
          const span = document.createElement("span");
          span.textContent = input.value;
          li.insertBefore(span, input);
          li.removeChild(input);
          button.textContent = "edit";
        },
      };

      // select and run action in button's name
      nameActions[action]();
    }
  });
});
