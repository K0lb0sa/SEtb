// Добавить кнопке для отправки сообщений событие при нажатии
document.getElementById("input-message-button").onclick = SendMessage;

localStorage.setItem("currentContact", "contact-1");
UpdateMessageContainer();

let contacts = document.getElementsByClassName("contact");
for (let i = 0; i < contacts.length; i++) {
    if (localStorage.getItem(contacts.item(i).id) == null) {
        let messageArr = [];
        localStorage.setItem(contacts.item(i).id, JSON.stringify(
            {
                messages: messageArr,
            }
        ));
    }

    contacts.item(i).onclick = function () {
        localStorage.setItem("currentContact", contacts.item(i).id);
        UpdateMessageContainer();
    };
}

function SendMessage() {
    const inputTextBox = document.getElementById("input-message");
    let message = inputTextBox.value
    inputTextBox.value = "";

    let messageArr;

    let contactId = localStorage.getItem("currentContact");
    if (localStorage.getItem(contactId) == null) {
        messageArr = [message];
        localStorage.setItem(contactId, JSON.stringify(
            {
                messages: messageArr,
            }
        ));
    }
    else {
        messageArr = JSON.parse(localStorage.getItem(contactId)).messages;
        messageArr.push(message);

        localStorage.setItem(contactId, JSON.stringify(
            {
                messages: messageArr,
            }
        ));
    }


    AddMessageElement(message);
}

// Добавить блок сообщения в html
function AddMessageElement(message) {
    const newDiv = document.createElement("div");
    newDiv.appendChild(document.createTextNode(message));
    newDiv.className = "message-block";

    const textContainer = document.getElementById("chat-text-container");
    textContainer.appendChild(newDiv);
}

function ClearMessageElements() {
    // let elements = document.getElementsByClassName("message-block");
    // let len = elements.length;
    // for (let i = 0; i < len; i++) {
    //     elements[i].remove();
    // }

    let elements = document.getElementsByClassName("message-block");
    while (elements.length !== 0) {
        console.log(elements[0]);
        elements[0].remove();
        //elements.shift();
    }
}

function UpdateMessageContainer() {
    ClearMessageElements();
    let messageArr = JSON.parse(localStorage.getItem(localStorage.getItem("currentContact"))).messages;
    for (let j = 0; j < messageArr.length; j++) {
        AddMessageElement(messageArr[j]);
    }
}