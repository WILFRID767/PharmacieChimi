document.addEventListener("DOMContentLoaded", function () {

    console.log("contact.js fonctionne correctement.");


    const contactForm = document.getElementById("contactForm");


    if (!contactForm) {
        console.error("Le formulaire contactForm est introuvable.");
        return;
    }


    contactForm.addEventListener("submit", function (event) {

        // Empêche le formulaire de recharger la page
        event.preventDefault();


        // Récupération des informations
        const nom = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const telephone = document.getElementById("telephone").value.trim();

        const sujet = document.getElementById("subject").value.trim();

        const message = document.getElementById("message").value.trim();


        // Vérification
        if (!nom || !message) {

            alert("Veuillez remplir votre nom et votre message.");

            return;
        }


        /*
        ============================================
        NUMÉRO WHATSAPP DE LA PHARMACIE
        ============================================

        +237 677 254 180

        WhatsApp utilise le format international
        sans le + et sans les espaces.
        */

        const numeroWhatsApp = "237677254180";


        /*
        ============================================
        CONSTRUCTION DU MESSAGE
        ============================================
        */

        let texteWhatsApp =
            "Bonjour Pharmacie Chimi,\n\n" +

            "Je vous contacte depuis votre site internet.\n\n" +

            "👤 Nom : " + nom + "\n";


        if (email) {
            texteWhatsApp +=
                "📧 Email : " + email + "\n";
        }


        if (telephone) {
            texteWhatsApp +=
                "📞 Téléphone : " + telephone + "\n";
        }


        if (sujet) {
            texteWhatsApp +=
                "📌 Sujet : " + sujet + "\n";
        }


        texteWhatsApp +=
            "\n💬 Message :\n" +
            message;


        /*
        ============================================
        ENCODAGE DU MESSAGE
        ============================================
        */

        const messageEncode =
            encodeURIComponent(texteWhatsApp);


        /*
        ============================================
        LIEN WHATSAPP
        ============================================
        */

        const whatsappURL =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            messageEncode;


        /*
        ============================================
        OUVRIR WHATSAPP
        ============================================
        */

        window.open(
            whatsappURL,
            "_blank"
        );

    });

});