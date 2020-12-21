//* Получать переменные css в js. и управлять ими.
window.getComputedStyle(document.documentElement).getPropertyValue('--box-bg');
document.body.style.setProperty('--box-bg', 'darkred');
document.querySelector('.card').style.setProperty('--box-bg', 'blue');


