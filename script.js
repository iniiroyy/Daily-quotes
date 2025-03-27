const quotes = [
    "Kesuksesan dimulai dengan langkah pertama.",
    "Jangan takut gagal, karena kegagalan adalah awal dari kesuksesan.",
    "Tetaplah bergerak maju, walau perlahan.",
    "Keberhasilan datang dari usaha yang tidak pernah berhenti.",
    "Percayalah pada diri sendiri, dan dunia akan mengikutimu."
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
