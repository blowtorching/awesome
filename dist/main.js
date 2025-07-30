document.addEventListener('DOMContentLoaded', function () {
    var terminal = document.getElementById('terminal');
    var profileSection = document.getElementById('profile-section');
    var ipElement = document.getElementById('user-ip');
    // Generate random IP address
    var randomIP = generateRandomIP();
    ipElement.textContent = randomIP;
    // Handle keypress event for "Enter"
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            switchToProfileView();
        }
    });
    // Generate a random IP address
    function generateRandomIP() {
        var segment1 = Math.floor(Math.random() * 255);
        var segment2 = Math.floor(Math.random() * 255);
        var segment3 = Math.floor(Math.random() * 255);
        var segment4 = Math.floor(Math.random() * 255);
        return "".concat(segment1, ".").concat(segment2, ".").concat(segment3, ".").concat(segment4);
    }
    // Switch from terminal view to profile view
    function switchToProfileView() {
        if (terminal.style.display !== 'none') {
            // Animate terminal closing
            terminal.style.opacity = '0';
            setTimeout(function () {
                terminal.style.display = 'none';
                // Show profile section
                profileSection.style.display = 'block';
                profileSection.style.opacity = '0';
                setTimeout(function () {
                    profileSection.style.opacity = '1';
                }, 100);
            }, 300);
        }
    }
    // Also allow clicking anywhere to continue
    document.addEventListener('click', function () {
        switchToProfileView();
    });
});
