const hint1Button = document.getElementById('hint1');
const hint2Button = document.getElementById('hint2');
const hintText = document.getElementById('hint-text');

hint1Button.addEventListener('click', () => {
    hintText.textContent = "Các tài nguyên web thường được lưu dưới dạng đường dẫn URL";
});

hint2Button.addEventListener('click', () => {
    hintText.textContent = "Có 1 đường dẫn URL lưu trữ các tài nguyên web bị giới hạn với cú pháp tên trang web + /robots.txt";
});
