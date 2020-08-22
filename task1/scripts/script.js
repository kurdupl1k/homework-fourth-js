function getDate() {
  let today = new Date(Date.now());

  return today.getHours() + ":" +
           today.getMinutes() + ":" +
           today.getSeconds() + " " +
           today.getDay() + "." +
           (today.getMonth() + 1) + "." +
           today.getFullYear();
}

document.getElementById("newMessageAddition").onsubmit = function () {
  let name = document.getElementById("name").value;
  let message = document.getElementById("messageInput").value;

  let messageBlock = document.createElement("div");
  messageBlock.classList.add("message");
  messageBlock.innerHTML = `
    <div class="message-top-block">
      <p>${ name.length == 0 ? "Unknown" : name }</p>
      <p>${ getDate() }</p>
    </div>
    <p class="message-body">${ message }</p>
  `;

  document.getElementById("wrapper").insertBefore(messageBlock,
    document.getElementById("wrapper").firstElementChild);

    return false;
}