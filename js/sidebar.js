function handleSideBarMenu() {
  const button = document.getElementById('menu-hamburguer');

  if (button.checked === true) {
    document.querySelector('.sidebar').style.left = '0';
    return;
  }
  document.querySelector('.sidebar').style.left = '-40%';
}

function clodeSideBar() {
  document.getElementById('menu-hamburguer').checked = false;
  document.querySelector('.sidebar').style.left = '-40%';
}
