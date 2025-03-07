document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".expandable-toggle").forEach(function (toggle) {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            var contentId = this.getAttribute("data-target");
            var content = document.getElementById(contentId);

            if (content) {
                if (content.style.display === "none" || content.style.display === "") {
                    content.style.display = content.classList.contains("inline-expand") ? "inline" : "block";
                    this.innerHTML = "[-] click to collapse";
                } else {
                    content.style.display = "none";
                    this.innerHTML = "[+] click to expand";
                }
            }
        });
    });

    document.querySelectorAll(".expandable-toggle2").forEach(function (toggle) {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            var contentId = this.getAttribute("data-target");
            var content = document.getElementById(contentId);

            if (content) {
                if (content.style.display === "none" || content.style.display === "") {
                    content.style.display = content.classList.contains("inline-expand") ? "inline" : "block";
                    this.innerHTML = "[-] click to collapse";
                } else {
                    content.style.display = "none";
                    this.innerHTML = "[+] click to expand";
                }
            }
        });
    });

    document.querySelectorAll(".expandable-toggle-minimal").forEach(function (toggle) {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            var contentId = this.getAttribute("data-target");
            var content = document.getElementById(contentId);

            if (content) {
                if (content.style.display === "none" || content.style.display === "") {
                    content.style.display = content.classList.contains("inline-expand") ? "inline" : "block";
                    this.innerHTML = "[-]";
                } else {
                    content.style.display = "none";
                    this.innerHTML = "[+]";
                }
            }
        });
    });
});

