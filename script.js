var space=document.getElementsByClassName('space');
var homePageImage=document.getElementById('homepageImage');
homePageImage.classList.remove('fadeout')


for (var i = 0; i < space.length; i++) {
    space.item(i).innerText="---------------------";
 }

function openNav() {
    document.getElementById("navSupportContent").style.width = "250px";
    homePageImage.classList.add('fadeout');
}
  
function closeNav() {
    document.getElementById("navSupportContent").style.width = "0";
    homePageImage.classList.remove('fadeout')
}