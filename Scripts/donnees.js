let mots = [
  "courgette",
  "table",
  "chaise",
  "cucurbitace",
  "argent",
  "espoir",
  "pomme",
  "orange",
  "soleil",
  "voiture",
  "ordinateur",
  "stylo",
  "chemise",
  "maison",
  "bouteille",
  "fenetre",
  "plante",
  "montagne",
  "paysage",
  "vacances",
  "restaurant",
  "avion",
  "cuisine",
  "bureau",
  "livre",
  "musique",
  "film",
  "eau",
  "feu",
  "terre",
  "air",
  "animal",
  "cadeau",
  "telephone",
  "horloge",
  "miroir",
  "internet",
  "jardin",
  "parc",
  "ecole",
  "football",
  "basketball",
  "velo",
  "bateau",
  "train",
  "photo",
  "carte",
  "souris",
  "clavier",
  "chemin",
  "piscine",
  "piano",
  "guitare",
  "violin",
  "frere",
  "soeur",
  "mere",
  "pere",
  "grand-mere",
  "grand-pere",
  "bebe",
  "adolescent",
  "adulte",
  "homme",
  "femme",
  "chaussure",
  "pantalon",
  "robe",
  "jupe",
  "bottes",
  "chapeau",
  "bracelet",
  "collier",
  "bague",
  "cuivre",
  "verre",
  "bois",
  "plastique",
  "pierre",
  "carton",
  "metal",
  "velours",
  "soie",
  "coton",
  "laine",
  "poisson",
  "viande",
  "legume",
  "fruit",
  "fromage",
  "pain",
  "gateau",
  "chocolat",
  "vin",
  "biere",
  "cafe",
  "the",
  "eau",
  "lait",
  "soupe",
  "sel",
  "sucre",
  "huile",
  "poivre",
  "miel",
  "ketchup",
  "mayonnaise",
  "sandwich",
  "pizza",
  "hamburger",
  "frites",
  "salade",
  "glace",
  "bonbon",
  "chips",
  "noix",
  "raisin",
  "banane",
  "poire",
  "cerise",
  "fraise",
  "framboise",
  "kiwi",
  "avocat",
  "tomate",
  "carotte",
  "concombre",
  "aubergine",
  "poivron",
  "oignon",
  "ail",
  "brocoli",
  "champignon",
  "patate",
  "haricot",
  "petit pois",
  "mais",
  "ble",
  "riz",
  "pates",
  "pain",
  "baguette",
  "croissant",
  "gateau",
  "tarte",
  "crepe",
  "gaufre",
  "biscuit",
  "chocolatine",
  "sucette",
  "chocolat",
  "barbe a papa",
  "glace",
  "yaourt",
  "creme brulee",
  "riz au lait",
  "salade de fruits",
  "confiture",
  "miel",
  "sirop",
  "jus",
  "soda",
  "limonade",
  "biere",
  "vin",
  "cafe",
  "the",
  "eau",
  "cappuccino",
  "latte",
  "espresso",
  "americano",
  "macchiato",
  "mocaccino",
  "chai",
  "infusion",
  "camomille",
  "menthe",
  "cryptogramme",
  "elucubration",
  "xylophone",
  "hippopotame",
  "rhinoceros",
  "imperatif",
  "inquisiteur",
  "obscurite",
  "quadriceps",
  "luminosite",
  "volumineux",
  "xyloglotte",
  "exacerber",
  "pantomime",
  "dactylographie",
  "paleontologie",
  "capricieux",
  "embryonnaire",
  "mystificateur",
  "perpendiculaire",
  "sycophante",
  "tympanoplastie",
  "odontalgique",
  "effervescent",
  "zigzagant",
  "expansion",
  "chevauchement",
  "mystere",
  "tenebreux",
  "sensation",
  "revolver",
  "ascenseur",
  "meurtre",
  "espion",
  "conspiration",
  "complot",
  "traque",
  "disparition",
  "enchanteur",
  "ensorceler",
  "apparition",
  "fantome",
  "pharaon",
  "delicieux",
  "assassin",
  "trebuchement",
  "fantastique",
  "corbeille",
  "cylindre",
  "mystique",
  "phobie",
  "crepuscule",
  "sulfureux",
  "regarder",
  "fleuve",
  "catastrophe",
  "clandestin",
  "subversif",
  "plaisir",
  "symptome",
  "suspicion",
  "versatile",
  "excentrique",
  "acquiescer",
  "fantomatique",
  "revolution",
  "agrandissement",
  "renovation",
  "clavicule",
  "pelerinage",
  "effritement",
  "bouleversement",
  "enthousiasme",
  "panoramique",
  "exceptionnel",
  "antagoniste",
  "meconnu",
  "enigmatique",
  "rectangulaire",
  "assouplissement",
  "ultrasonore",
  "sculpture",
  "dentifrice",
  "aspirateur",
  "ephemere",
  "transformer",
  "subvention",
  "calculatrice",
  "independant",
  "diagonale",
  "reglement",
  "libellule",
  "mandarine",
  "ecologiste",
  "geometrie",
  "theologie",
  "oligarchie",
  "gladiateur",
  "veritable",
  "sorcier",
  "vegetarien",
  "catacombe",
  "transformation",
  "paradoxal",
  "clandestinite",
  "ressusciter",
  "temperament",
  "cryptographie",
  "imaginaire",
  "climatisation",
  "fragmentation",
  "insolite",
  "coriace",
  "loufoque",
  "transcendance",
  "enigmatiquement",
  "indispensable",
  "exponentiellement",
  "triomphalement",
];

let motsCaches = [
  {
    mot: "_ _ _ _ _ _ _ _", // courgette
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // table
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // chaise
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // cucurbitace
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // argent
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // espoir
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // pomme
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // orange
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // soleil
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // voiture
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // ordinateur
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // stylo
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // chemise
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // maison
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // bouteille
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // fenetre
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // plante
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // montagne
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // paysage
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // vacances
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // restaurant
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // avion
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // cuisine
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // bureau
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // livre
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // musique
    generated: false,
  },

  {
    mot: "_ _ _ _", // film
    generated: false,
  },

  {
    mot: "_ _ _", // eau
    generated: false,
  },

  {
    mot: "_ _ _", // feu
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // terre
    generated: false,
  },

  {
    mot: "_ _ _", // air
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // animal
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // cadeau
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // telephone
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // horloge
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // miroir
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // internet
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // jardin
    generated: false,
  },

  {
    mot: "_ _ _ _", // parc
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // ecole
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // football
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // basketball
    generated: false,
  },

  {
    mot: "_ _ _ _", // velo
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // bateau
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // train
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // photo
    generated: false,
  },

  // BON JUSQUA ICIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

  {
    mot: "_ _ _ _ _", // carte
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // souris
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // clavier
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // chemin
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // piscine
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // piano
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // guitare
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // violin
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // frere
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // soeur
    generated: false,
  },

  {
    mot: "_ _ _ _", // mere
    generated: false,
  },

  {
    mot: "_ _ _ _", // pere
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // grand-mere
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // grand-pere
    generated: false,
  },

  {
    mot: "_ _ _ _", // bebe
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // adolescent
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // adulte
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // homme
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // femme
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // chaussure
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // pantalon
    generated: false,
  },

  {
    mot: "_ _ _ _", // robe
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // jupe
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // bottes
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // chapeau
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // bracelet
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // collier
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // bague
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // cuivre
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // verre
    generated: false,
  },

  {
    mot: "_ _ _ _", // bois
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // plastique
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // pierre
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // carton
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // metal
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // velours
    generated: false,
  },

  {
    mot: "_ _ _ _", // soie
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // coton
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // laine
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // poisson
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // viande
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // legume
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // fruit
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // fromage
    generated: false,
  },

  {
    mot: "_ _ _ _", // pain
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // gateau
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // chocolat
    generated: false,
  },

  {
    mot: "_ _ _", // vin
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // biere
    generated: false,
  },

  {
    mot: "_ _ _ _", // cafe
    generated: false,
  },

  {
    mot: "_ _ _", // the
    generated: false,
  },

  {
    mot: "_ _ _", // eau
    generated: false,
  },

  {
    mot: "_ _ _ _", // lait
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // soupe
    generated: false,
  },

  {
    mot: "_ _ _", // sel
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // sucre
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // huile
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // poivre
    generated: false,
  },

  {
    mot: "_ _ _ _", // miel
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // ketchup
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // mayonnaise
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // sandwich
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // pizza
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // hamburger
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // frites
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // salade
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // glace
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // bonbon
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // chips
    generated: false,
  },

  {
    mot: "_ _ _ _", // noix
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // raisin
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // banane
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // poire
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // cerise
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // fraise
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // framboise
    generated: false,
  },

  {
    mot: "_ _ _ _", // kiwi
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // avocat
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // tomate
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // carotte
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // concombre
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // aubergine
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // poivron
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // oignon
    generated: false,
  },

  {
    mot: "_ _ _", // ail
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // brocoli
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // champignon
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // patate
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // haricot
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // petit pois
    generated: false,
  },

  {
    mot: "_ _ _ _", // mais
    generated: false,
  },

  {
    mot: "_ _ _", // ble
    generated: false,
  },

  {
    mot: "_ _ _", // riz
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // pates
    generated: false,
  },

  {
    mot: "_ _ _ _", // pain
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // baguette
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // croissant
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // gateau
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // tarte
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // crepe
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // gaufre
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // biscuit
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // chocolatine
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // sucette
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // chocolat
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // barbe a papa
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // glace
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // yaourt
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // creme brulee
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // riz au lait
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // salade de fruits
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // confiture
    generated: false,
  },

  {
    mot: "_ _ _ _", // miel
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // sirop
    generated: false,
  },

  {
    mot: "_ _ _ _", // jus
    generated: false,
  },

  {
    mot: "_ _ _ _", // soda
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // limonade
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // biere
    generated: false,
  },

  {
    mot: "_ _ _ _", // vin
    generated: false,
  },

  {
    mot: "_ _ _ _", // cafe
    generated: false,
  },

  {
    mot: "_ _ _", // the
    generated: false,
  },

  {
    mot: "_ _ _", // eau
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // cappuccino
    generated: false,
  },

  {
    mot: "_ _ _ _ _", // latte
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // espresso
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // americano
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // macchiato
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // mocaccino
    generated: false,
  },

  {
    mot: "_ _ _ _", // chai
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // infusion
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // camomille
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // menthe
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // cryptogramme
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // elucubration
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // xylophone
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // hippopotame
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // rhinoceros
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // imperatif
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // inquisiteur
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // obscurite
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // quadriceps
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // luminosite
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // volumineux
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // xyloglotte
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // exacerber
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // pantomime
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // dactylographie
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // paleontologie
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // capricieux
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // embryonnaire
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _", // mystificateur
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // perpendiculaire
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // sycophante
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // tympanoplastie
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _", // odontalgique
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _", // effervescent
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // zigzagant
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // expansion
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // chevauchement
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // mystere
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // tenebreux
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // sensation
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // revolver
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // ascenseur
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // meurtre
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // espion
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // conspiration
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // complot
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // traque
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // disparition
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // enchanteur
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // ensorceler
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // apparition
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // fantome
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // pharaon
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // delicieux
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // assassin
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _", // trebuchement
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // fantastique
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // corbeille
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // cylindre
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // mystique
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // phobie
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // crepuscule
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // sulfureux
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // regarder
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _", // fleuve
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // catastrophe
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // clandestin
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // subversif
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // plaisir
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // symptome
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // suspicion
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // versatile
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // excentrique
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // acquiescer
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // fantomatique
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // revolution
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // agrandissement
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // renovation
    generated: false,
  },
  {
    mot: "_ _ _ _ _ _ _ _ _ _", // clavicule
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // pelerinage
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _", // effritement
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // bouleversement
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // enthousiasme
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _", // panoramique
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // exceptionnel
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // antagoniste
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _", // meconnu
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // enigmatique
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // rectangulaire
    generated: false,
  },
  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // assouplissement
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _", // ultrasonore
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // sculpture
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // dentifrice
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // aspirateur
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // ephemere
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // transformer
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // subvention
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _", // calculatrice
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _", // independant
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // diagonale
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // reglement
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // libellule
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // mandarine
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // ecologiste
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // geometrie
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // theologie
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // oligarchie
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // gladiateur
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // veritable
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // sorcier
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // vegetarien
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // catacombe
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // transformation
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _", // paradoxal
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // clandestinite
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _", // ressusciter
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _", // temperament
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // cryptographie
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _", // imaginaire
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // climatisation
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // fragmentation
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _", // insolite
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _", // coriace
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _", // loufoque
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // transcendance
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // enigmatiquement
    generated: false,
  },
  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // indispensable
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // exponentiellement
    generated: false,
  },

  {
    mot: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", // triomphalement
    generated: false,
  },
];

let historique = [];
