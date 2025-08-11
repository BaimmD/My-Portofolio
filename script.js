let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;  // posisi elemen dikurangi margin
        let height = sec.offsetHeight;     // tinggi elemen
        let id = sec.getAttribute('id');   // ambil id section

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                // pakai tanda kutip agar aman untuk ID dengan karakter spesial
                let currentLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

document.addEventListener('DOMContentLoaded', () => {
  const welcome = document.querySelector('.welcome-screen');
  if (!welcome) return;

  // Saat animasi fadeOutScreen selesai, hapus elemen dari DOM
  welcome.addEventListener('animationend', (e) => {
    if (e.animationName === 'fadeOutScreen') {
      welcome.setAttribute('aria-hidden', 'true');
      welcome.remove();

      // fokus ke main agar pembaca layar langsung ke konten
      const main = document.querySelector('main');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus();
      }
    }
  });

  // Fallback: jika animationend tidak terpanggil, hapus setelah 9 detik
  setTimeout(() => {
    if (document.body.contains(welcome)) {
      welcome.setAttribute('aria-hidden', 'true');
      welcome.remove();
    }
  }, 9000);
});

