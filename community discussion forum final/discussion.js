function postDiscussion() {

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill all fields.");
        return;
    }

    let discussionList = document.getElementById("discussionList");

    let post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>

        <button onclick="reply()">Reply</button>
        <button onclick="likePost(this)">👍 Like <span>0</span></button>
        <button onclick="deletePost(this)">Delete</button>
    `;

    discussionList.prepend(post);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

function reply() {
    let text = prompt("Enter your reply:");

    if (text) {
        alert("Reply Added:\n" + text);
    }
}

function likePost(button) {

    let count = button.querySelector("span");

    count.innerText = Number(count.innerText) + 1;
}

function deletePost(button) {

    if (confirm("Delete this discussion?")) {

        button.parentElement.remove();
    }
}
function reply(button) {
    let text = prompt("Enter your reply:");

    if (text === null || text.trim() === "") {
        return;
    }

    let post = button.parentElement;

    let reply = document.createElement("p");
    reply.innerHTML = "<b>Reply:</b> " + text;

    post.appendChild(reply);
}