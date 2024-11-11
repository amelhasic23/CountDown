const nums = document.querySelectorAll('.num');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replayButton = document.getElementById('replay');

function resetAnimation() {
    nums.forEach(num => {
        num.classList.remove('in');
    });
    counter.style.display = 'flex';
    finalMessage.style.display = 'none';
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const delay = idx * 1000;
        setTimeout(() => {
            num.style.opacity = '1';
            num.style.transform = 'scale(1)';
        }, delay);

        setTimeout(() => {
            num.style.opacity = '0';
            num.style.transform = 'scale(0)';
        }, delay + 800);
    });

    setTimeout(() => {
        counter.style.display = 'none';
        finalMessage.style.display = 'block';
    }, nums.length * 1000);
}

replayButton.addEventListener('click', () => {
    resetAnimation();
    runAnimation();
});

runAnimation();
