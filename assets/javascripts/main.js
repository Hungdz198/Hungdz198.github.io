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
    
    const closeEditCard = document.querySelector(".edit_card .button--close > button");
    if (closeEditCard != null) {
        closeEditCard.addEventListener('click', () => {
          document.querySelector(".edit_card").classList.remove("edit_card--show");
        });
    }
    const createBookCard = document.querySelector(".create-book > button");
      if (createBookCard != null) {
        createBookCard.addEventListener('click', () => {
          document.querySelector(".create_card").classList.add("edit_card--show");
        });
    }
    const closeCreateBookCard = document.querySelector(".create_card .button--close > button");
      if (closeCreateBookCard != null) {
        closeCreateBookCard.addEventListener('click', () => {
          document.querySelector(".create_card").classList.remove("edit_card--show");
        });
      }
    
    const borrowBook = document.querySelector(".btn--borrow_book > button");
    if (borrowBook != null) {
      borrowBook.addEventListener('click', () => {
        document.querySelector(".create-borrow_book").classList.add("edit_card--show");
      });
    }
    
    const closeBorrowBook = document.querySelector(".create-borrow_book .button--close > button");
    if (closeBorrowBook != null) {
      closeBorrowBook.addEventListener('click', () => {
        document.querySelector(".create-borrow_book").classList.remove("edit_card--show");
      });
    }


    const createUser = document.querySelector(".create-user > button");
    if (createUser != null) {
      createUser.addEventListener('click', () => {
        document.querySelector(".create_user").classList.add("edit_card--show");
      });
    }
    
    const closeCreateUser = document.querySelector(".create_user .button--close > button");
    if (closeCreateUser != null) {
      closeCreateUser.addEventListener('click', () => {
        document.querySelector(".create_user").classList.remove("edit_card--show");
      });
    }


 
    const editUser = document.querySelectorAll(".btn-edit_user > button");

    editUser.forEach(function(item) {
      item.addEventListener('click', () => {
        document.querySelector(".edit_user").classList.add("edit_card--show");
      });
    });
    
    const closeEditUser = document.querySelector(".edit_user .button--close > button");
    if (closeEditUser != null) {
      closeEditUser.addEventListener('click', () => {
        document.querySelector(".edit_user").classList.remove("edit_card--show");
      });
    }

},false);