
function updateNavbar() {
  const loginLink = document.getElementById('login-link');
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    // أول كلمة من الاسم
    const firstName = currentUser.name.split(' ')[0];

    loginLink.innerHTML = `
      <span>مرحباً، ${firstName}</span> |
      <a href="#" id="logout">Logout</a>
    `;

    document.getElementById('logout').addEventListener('click', () => {
      localStorage.removeItem("currentUser");
      updateNavbar();
    });
  } else {
    loginLink.innerHTML = `<a href="login.html">Login</a>`;
  }
}

// نفّذ الكود عند تحميل الصفحة
updateNavbar();
