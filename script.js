document.addEventListener('DOMContentLoaded', () => {
    const btnHamburger = document.getElementById('btn-hamburger');
    const btnClose = document.getElementById('btn-close');
    const mobileOverlay = document.getElementById('mobile-overlay');
    
    // Abrir menu mobile
    btnHamburger.addEventListener('click', () => {
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita scroll do fundo
    });

    // Fechar menu mobile
    btnClose.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Fechar ao clicar em qualquer link interno do mobile
    const mobileLinks = document.querySelectorAll('.mobile-link:not(.mobile-dropdown-toggle)');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Submenu interativo no mobile
    const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
    const mobileSubmenu = document.querySelector('.mobile-submenu');

    if (mobileDropdownToggle && mobileSubmenu) {
        mobileDropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            mobileSubmenu.classList.toggle('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.getElementById('whatsapp-btn');

    if (whatsappBtn) {
        // Função que adiciona a classe de tremer e remove logo em seguida
        const dispararTremor = () => {
            whatsappBtn.classList.add('tremer');
            
            // Remove a classe após 600ms (tempo de duração da animação no CSS) 
            // para que possa ser acionada novamente no próximo ciclo
            setTimeout(() => {
                whatsappBtn.classList.remove('tremer');
            }, 600);
        };

        // Dispara o tremor a cada 15 segundos (15000 milissegundos)
        setInterval(dispararTremor, 15000);
    }
});
