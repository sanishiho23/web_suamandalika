document.addEventListener("DOMContentLoaded", function() {
    
    const navbar = document.getElementById("navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const allLinks = document.querySelectorAll(".nav-links li a"); // Ambil semua link menu

    // 1. Navbar Scroll Effect (Warna berubah saat discroll)
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. Fungsi Toggle Menu (Buka/Tutup Menu di HP)
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        
        // Ubah ikon hamburger menjadi 'X' (opsional, visual saja)
        const icon = menuToggle.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.classList.replace("ph-list", "ph-x");
        } else {
            icon.classList.replace("ph-x", "ph-list");
        }
    });

    // 3. Tutup menu otomatis saat link diklik (Agar tidak menghalangi layar)
    allLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                icon.classList.replace("ph-x", "ph-list");
            }
        });
    });

    // 4. Smooth Scroll (Perbaikan logic)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Scroll dengan kompensasi tinggi navbar
                const headerOffset = 70; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Fungsi Ganti Tab Desa (Tetap sama)
function openVillage(evt, villageName) {
    var i, tabContent, tabBtns;
    
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active-content");
    }

    tabBtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtns.length; i++) {
        tabBtns[i].className = tabBtns[i].className.replace(" active", "");
    }

    document.getElementById(villageName).style.display = "block";
    setTimeout(() => {
        document.getElementById(villageName).classList.add("active-content");
    }, 10);
    evt.currentTarget.className += " active";
}