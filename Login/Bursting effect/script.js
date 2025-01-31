document.getElementById('burstButton').addEventListener('click', function () {
    burstWord();
});

function burstWord() {
    const letters = document.querySelectorAll('.letter');
    const wordContainer = document.getElementById('wordContainer');
    const burstDuration = 1000; // Duration of the burst in milliseconds

    letters.forEach((letter, index) => {
        // Get the position of each letter
        const rect = letter.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Hide the original letter
        letter.style.opacity = '0';

        // Create particles for each letter
        const numberOfParticles = 20; // Number of particles per letter
        for (let i = 0; i < numberOfParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            document.body.appendChild(particle);

            // Position the particle at the center of the letter
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;

            // Randomize particle movement
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 200;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            // Animate the particle
            particle.animate([
                { transform: 'translate(0, 0)', opacity: 1 },
                { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
            ], {
                duration: burstDuration,
                easing: 'ease-out',
                fill: 'forwards'
            });

            // Remove the particle after the animation ends
            setTimeout(() => {
                particle.remove();
            }, burstDuration);
        }
    });

    // Reset the letters after the animation
    setTimeout(() => {
        letters.forEach(letter => {
            letter.style.opacity = '1';
        });
    }, burstDuration);
}