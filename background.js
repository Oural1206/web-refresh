function check() {
    if (!document.hasFocus()) {
        location.reload()
    } else {
        const remake = setTimeout(check, 10)
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const start = setTimeout(check, 00)
});
