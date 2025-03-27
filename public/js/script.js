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
    // Convert form fields to JSON
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (type === "lost") {
        data.dateLost = document.getElementById("dateLost").value || null;
    } else if (type === "found") {
        data.dateFound = document.getElementById("dateFound").value || null;
    }

    try {
        const response = await fetch(`/api/${type}`, { 
            method: "POST",
            headers: { "Content-Type": "application/json" }, // ✅ Ensure JSON format
            body: JSON.stringify(data), // ✅ Convert formData to JSON
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const result = await response.json();
        alert(result.message || "Submission successful!");
        form.reset(); // ✅ Clear form after successful submission
    } catch (error) {
        console.error("Error submitting item:", error);
        alert("Failed to submit. Please check your inputs and try again.");
    }
}
