document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("actionForm");
    const log = document.getElementById("log");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const action = document.getElementById("action").value;
        const quantity = document.getElementById("quantity").value;

        const res = await fetch("/add_action", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action, quantity, date: new Date().toISOString() })
        });

        const data = await res.json();
        log.innerHTML = JSON.stringify(data.actions, null, 2);
    });
});
