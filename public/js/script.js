document.addEventListener("DOMContentLoaded", () => {
    const lostForm = document.getElementById("lostForm");
    const foundForm = document.getElementById("foundForm");

    if (lostForm) {
        lostForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            await submitItem("lost");
        });
    }

    if (foundForm) {
        foundForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            await submitItem("found");
        });
    }
});
async function submitItem(type) {
    const formData = new FormData();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    formData.append("name", name);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("email", email);
    formData.append("number", number);

    if (type === "found") {
        const imageFile = document.getElementById("itemImage").files[0];
        if (imageFile) {
            formData.append("image", imageFile);
        }
    }

    try {
        const response = await fetch('/api/${type}', {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error("Error submitting item:", error);
        alert("Failed to submit. Please try again later.");
    }
}
