const envelope = document.getElementById('envelope');
const btnOpen = document.getElementById('open');
const btnClose = document.getElementById('close');

btnOpen.addEventListener('click', () => {
    envelope.classList.remove('close');
    envelope.classList.add('open');
});

btnClose.addEventListener('click', () => {
    envelope.classList.remove('open');
    envelope.classList.add('close');
});