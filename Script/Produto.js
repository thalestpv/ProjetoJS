// navbar
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("ativo");
}



//  Buttons
function showTab(tabName) {
   
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    document.getElementById(tabName).classList.add('active');

    event.target.classList.add('active');
}
