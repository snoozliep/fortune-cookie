const fortunes = [
    "You will have a great day!",
    "A new opportunity will come your way.",
    "Happiness is around the corner.",
    "You will find what you seek.",
    "Good things are coming your way.",
    "You will meet someone special soon.",
    "Your hard work will pay off.",
    "Expect the unexpected!",
    "You will travel to new places.",
    "A friend will bring you good news."
];

document.getElementById('generate-button').addEventListener('click', function() {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById('fortune').textContent = randomFortune;
});
