export function tamanhoDaTela() {
  const windowWidth = window.innerWidth;
  const menuContainer = document.querySelector(".responsive_menu");

  if (windowWidth < 768) {
    menuMobile(menuContainer);
  } else {
    menuDesktop(menuContainer);
  }
}

//controle do menu mobile
function abrirMenuMobile(menuContainer) {
  const menuBotao = document.querySelector("[data-menu]");

  menuBotao.addEventListener("click", () => {
    menuContainer.innerHTML = `
      <div class="menuMobileAberto">

        <div>
          <div>
            <span>
              <img src="./assets/img/fechar.svg" alt="um X para fechar o menu" data-fechar>
            </span>
            <hr/>

            <ul>
              <li><a href="./index.html"><p>Home</p></a></li>
              <li><a href="./contato.html"><p>Contato</p></a></li>
            </ul>
          </div>
        </div>

        <div>
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    `;

    const menuMobileAberto = menuContainer.querySelector('.menuMobileAberto');
    setTimeout(() => {
      menuMobileAberto.classList.remove('inactive');
      menuMobileAberto.classList.add('active');
    }, 10);

    fecharMenuMobile(menuContainer);
  });
}

function fecharMenuMobile(menuContainer) {
  const botaoFechar = document.querySelector("[data-fechar]");

  botaoFechar.addEventListener("click", () => {
    const menuMobileAberto = menuContainer.querySelector('.menuMobileAberto');
    menuMobileAberto.classList.remove('active');
    menuMobileAberto.classList.add('inactive');

    setTimeout(() => {
      menuMobile(menuContainer);
    }, 300); // Match the duration of the CSS transition
  });
}

function menuMobile(menuContainer) {
  menuContainer.innerHTML = `
    <nav>
      <ul id="menu">
        <li><img src="./assets/img/menu.svg" alt="Menu" data-menu /></li>
      </ul>
    </nav>
  `;
  abrirMenuMobile(menuContainer);
}

function menuDesktop(menuContainer) {
  menuContainer.innerHTML = `
    <nav>
      <ul id="menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="contato.html">Contato</a></li>
      </ul>
    </nav>
  `;
}