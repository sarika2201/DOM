const input = document.getElementById('task-input');
const submitBtn = document.getElementById('submit-btn');
const typedText = document.getElementById('typed-text');
const boxes = document.querySelectorAll('.boxes .box');

function updateTypedText() {
    typedText.textContent = input.value;
}

submitBtn.addEventListener('click', updateTypedText);

boxes.forEach((box) => {
    const color = box.dataset.color;
    box.style.backgroundColor = color;

    box.addEventListener('click', () => {
        boxes.forEach((item) => item.classList.remove('selected'));
        box.classList.add('selected');
        document.body.style.backgroundColor = color;
    });
});
