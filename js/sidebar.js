function handleSideBarMenu() {
  document.getElementById(
    'menu-hamburguer-fixed'
  ).checked = document.getElementById('menu-hamburguer').checked;

  openSideBar();
}

function handleSideBarMenuFixed() {
  document.getElementById('menu-hamburguer').checked = document.getElementById(
    'menu-hamburguer-fixed'
  ).checked;

  openSideBar();
}

function openSideBar() {
  const inputHeader = document.getElementById('menu-hamburguer');
  const inputFixedHeader = document.getElementById('menu-hamburguer-fixed');

  if (inputHeader.checked === true || inputFixedHeader.checked === true) {
    document.querySelector('.sidebar').style.left = '0';
    return;
  }
  clodeSideBar();
}

function clodeSideBar() {
  document.getElementById('menu-hamburguer').checked = false;
  document.querySelector('.sidebar').style.left = '-100%';
}
