document.addEventListener("DOMContentLoaded", () => {
    // Handle Lost Item Form Submission
    const lostForm = document.getElementById("lostForm");
    if (lostForm) {
        lostForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const formData = {
                itemName: document.getElementById("itemName").value,
                description: document.getElementById("description").value,
                location: document.getElementById("location").value,
                email: document.getElementById("email").value
            };

            try {
                const response = await fetch("/api/lost", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                if (response.ok) {
                    alert("Lost item reported successfully!");
                    lostForm.reset();
                } else {
                    alert(`Error: ${result.message}`);
                }
            } catch (error) {
                console.error("Error reporting lost item:", error);
                alert("Failed to report lost item. Please try again.");
            }
        });
    }

    // Handle Found Item Form Submission
    const foundForm = document.getElementById("foundForm");
    if (foundForm) {
        foundForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const formData = {
                itemName: document.getElementById("itemName").value,
                description: document.getElementById("description").value,
                location: document.getElementById("location").value,
                email: document.getElementById("email").value
            };

            try {
                const response = await fetch("/api/found", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                if (response.ok) {
                    alert("Found item reported successfully!");
                    foundForm.reset();
                } else {
                    alert(`Error: ${result.message}`);
                }
            } catch (error) {
                console.error("Error reporting found item:", error);
                alert("Failed to report found item. Please try again.");
            }
        });
    }
});
