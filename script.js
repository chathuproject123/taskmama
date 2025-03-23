async function checkBalance() {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
        alert("Please log in first!");
        return;
    }

    // Call backend to get user balance
    const response = await fetch(`https://your-backend-url.vercel.app/api/balance?user_id=${userId}`);
    const data = await response.json();

    document.getElementById("balance").innerText = `Your balance: ${data.balance} coins`;
}

// Function to handle Telegram Authentication
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    const firstName = urlParams.get("first_name");

    if (userId) {
        localStorage.setItem("user_id", userId);
        document.getElementById("username").innerText = firstName;
        document.getElementById("user-id").innerText = userId;
        document.getElementById("user-info").style.display = "block";
    }
};
