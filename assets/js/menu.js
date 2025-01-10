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

                        <div class="wave"></div>
                        <div class="wave"></div>

                        <span>
                            <img src="./assets/img/fechar.svg" alt="um X para fechar o menu" data-fechar>
                        </span>
                        <ul>
                            <li><a href="./index.html">  Home   </a></li>
                            <li><a href="./contato.html">Contato</a></li>
                        </ul>
                    </div> 
            `;

    fecharMenuMobile(menuContainer);
  });
}

function fecharMenuMobile(menuContainer) {
  const botaoFechar = document.querySelector("[data-fechar]");

  botaoFechar.addEventListener("click", () => {
    
    menuMobile(menuContainer);

  });
}

function menuMobile(menuContainer) {
  menuContainer.innerHTML = `
        <nav>
            <ul id="menu">
              <li><img src="./assets/img/menu.svg" alt="Menu" data-menu /></button></li>
            </ul>
        </nav>
    
    `;
    abrirMenuMobile(menuContainer);
}

function menuDesktop(menuContainer) {
  menuContainer.innerHTML = `
        <nav>
            <ul id="menu" >
              <li><a href="index.html">Home</a></li>
              <li><a href="contato.html">Contato</a></li>
            </ul>
          </nav>
    `;
}
