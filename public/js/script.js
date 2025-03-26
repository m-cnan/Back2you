document.addEventListener("DOMContentLoaded", () => {
    const lostForm = document.getElementById("lostForm");
    const foundForm = document.getElementById("foundForm");

    if (lostForm) {
        lostForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            await submitItem("lost", lostForm);
        });
    }

    if (foundForm) {
        foundForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            await submitItem("found", foundForm);
        });
    }
});

async function submitItem(type, form) {
    const formData = new FormData(form);

    try {
        const response = await fetch(`/api/${type}`, { 
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const result = await response.json();
        alert(result.message || "Submission successful!");
    } catch (error) {
        console.error("Error submitting item:", error);
        alert("Failed to submit. Please check your inputs and try again.");
    }
}
