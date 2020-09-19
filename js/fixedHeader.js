const header = document.getElementById('fixed__header');
const sideBar = document.querySelector('.sidebar');

window.onscroll = function () {
  handleFixedHeader();
};

function handleFixedHeader() {
  if (window.pageYOffset > 90) {
    header.style.top = '0';
    return;
  }
  header.style.top = '-30%';
}
