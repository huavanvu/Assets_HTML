$(document).ready(function() {
  if (window.screen.width <= 991) {
    $('.sr-category__dropdown-item').on('click', function (ele) {
      var ele = ele,
        scrWidth = window.screen.width,
        leftEle = ele.target.offsetLeft,
        offLeftTransition = ele.originalEvent.x;
      eleMenu = $(this).find('.dropdown-menu');
      console.log(offLeftTransition)
      setTimeout(function() {
        $(eleMenu).attr('style', $(eleMenu).attr('style') + '; ' + 'left: ' + offLeftTransition + 'px!important;');
      }, 0);
    })
  }

  $('.status__love-icon').on('click', function (e) {
    $(this).toggleClass( "active" );
  })

  // submenu interactive with Main Menu
  // const subMenuItem = $('.header-navigation__items .header-navigation--item .dropdown-item');
  // const menuItemDynamic = $('#header-navigation--item__dynamic.header-navigation--item a.hn-item--text')
  // const menuNavigation = $('.header-navigation--item a.hn-item--text')
  // subMenuItem.each(function (indexInArray, valueOfElement) {
  //   $(this).on('click', function(event ) {
  //     event.preventDefault();
  //     menuItemDynamic.parent();
  //     menuItemDynamic.html($(this).html());
  //     menuNavigation.parent().removeClass('is-actived')
  //     menuItemDynamic.parent().addClass('is-actived w-auto')
  //   })
  // });
})