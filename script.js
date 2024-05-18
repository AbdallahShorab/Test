function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (!dropdownMenu.classList.contains("closed")) {
        setTimeout(function() {
            dropdownMenu.classList.add("closed");
        }, 200); // تأخير التبديل بـ 200 ميلي ثانية (0.2 ثانية)
    } else {
        dropdownMenu.classList.remove("closed");
    }
}

