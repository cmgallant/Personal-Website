const isNavActive() => {
  if (document.getElementById(nav_links).display = 'none') {
    return false;
  } else {
    return true;
  };
};

function displayNav() {
  if (isNavActive() = false) {
    document.getElementById(nav_links).display = true;
  } else {
    document.getElementById(nav_links).display = false;
  };
};
