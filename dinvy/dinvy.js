$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
$('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('#slider').slick('slickGoTo', slideno - 1);
   
 });


$(function () {
        $("#switch-id").change(function () {
            if ($(this).is(":checked")) {
                $(".fourpart1").show();
                $(".fourpart").hide();
            } else {
                $(".fourpart1").hide();
                $(".fourpart").show();
            }
        });
    });


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// toggle menu
lines = document.getElementById('toggleLine');
cross = document.getElementById('toggleCross');
view = document.getElementById('toggleView')
function resoLine(){
 lines.style.display= 'none';
 cross.style.display= 'block';
 view.style.display = 'block';
}
function resoCross(){
 lines.style.display= 'block';
 cross.style.display= 'none';
 view.style.display = 'none'

 }