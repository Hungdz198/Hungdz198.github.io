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