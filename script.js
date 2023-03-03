function scroll_handler() { // "handler" = gestionnaire
    
    // On s'assure de connaître la distance scrollée dans la fenêtre (ouvrir la console pour voir)
   console.log(window.scrollY);
    
    // Test : a-t-on scrollé d'une hauteur de fenêtre ou plus ?
    if (window.scrollY > window.innerHeight) {
        document.body.classList.add("scrolled"); // Ajout de la classe "scrolled" sur le body
    } else {
        document.body.classList.remove("scrolled"); // On enlève cette classe si on est remonté au-dessus du seuil
    }
    
}

window.onscroll = scroll_handler;

