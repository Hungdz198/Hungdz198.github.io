document.addEventListener("DOMContentLoaded",function(){
  var menu = document.getElementById('menu-toggle'),
      toggled = false;

    menu.addEventListener( 'click', function() {
      if ( !toggled ) {
        this.className += " toggled";
        toggled = true;
        document.querySelector("._menu").classList.add("_menu--show");
      } else {
        this.className = this.className.replace(/\b\stoggled\b/, "");
        toggled = false;
        document.querySelector("._menu").classList.remove("_menu--show");
      }
    }, false );

    const editItems = document.querySelectorAll(".post__link--edit");

    editItems.forEach(function(item) {
      item.addEventListener('click', () => {
        document.querySelector(".edit_card").classList.add("edit_card--show");
      });
    });
    
    document.querySelector(".edit_card .button--close > button").addEventListener('click', () => {
      document.querySelector(".edit_card").classList.remove("edit_card--show");
    });

      document.querySelector(".create-book > button").addEventListener('click', () => {
        document.querySelector(".create_card").classList.add("edit_card--show");
      });
    document.querySelector(".create_card .button--close > button").addEventListener('click', () => {
      document.querySelector(".create_card").classList.remove("edit_card--show");
    });

    document.querySelector(".btn--borrow_book > button").addEventListener('click', () => {
      document.querySelector(".create-borrow_book").classList.add("edit_card--show");
    });
    document.querySelector(".create-borrow_book .button--close > button").addEventListener('click', () => {
      document.querySelector(".create-borrow_book").classList.remove("edit_card--show");
    });


},false);