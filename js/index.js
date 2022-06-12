//Loading Animation
$(window).on('load', () => {
    $('#overlayWrapper').fadeOut(300);
    $('#mainBody').fadeIn(300);
});

//Drawer Function
const showDrawer = document.getElementById('bar');
const hideDrawer = document.getElementById('drawerOverlay');

showDrawer.addEventListener('click', () => {
    document.getElementById('drawerSideBar').classList.toggle('active');
    $('#drawerOverlay').fadeIn('fast');
});

hideDrawer.addEventListener('click', () => {
    document.getElementById('drawerSideBar').classList.toggle('active');
    $('#drawerOverlay').fadeOut('fast');
});