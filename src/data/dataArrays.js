export const users = [
  {
    id: 1,
    email: "zouani@gmail.com",
    username: "zouani",
    password: "zouani",
    role_id: 1, //Admin
    userToken: "token123",
  },
  {
    id: 2,
    email: "chaachai@gmail.com",
    username: "chaachai",
    password: "chaachai",
    role_id: 1, //Client
    userToken: "token123",
  },
  {
    id: 2,
    email: "chiadmi@gmail.com",
    username: "chiadmi",
    password: "chiadmi",
    role_id: 2, //Collaborateur
    userToken: "token12345",
  },
  {
    id: 3,
    email: "benmansour@gmail.com",
    username: "benmansour",
    password: "benmansour",
    role_id: 3, //Livreur
    userToken: "testtoken",
  },
];

export const commandes = [
  {
    id: 1,
    nbrProduits: 3,
    reference: "REF1",
    orderDate: "12/02/2020",
    dilivryDate: "20/02/2020",
    total: "355DH",
  },
  {
    id: 2,
    nbrProduits: 6,
    reference: "REF2",
    orderDate: "12/02/2020",
    dilivryDate: "20/02/2020",
    total: "400 DH",
  },
  {
    id: 3,
    nbrProduits: 4,
    reference: "REF3",
    orderDate: "12/02/2020",
    dilivryDate: "20/02/2020",
    total: "749 DH",
  },
  {
    id: 4,
    nbrProduits: 8,
    reference: "REF4",
    orderDate: "12/02/2020",
    dilivryDate: "20/02/2020",
    total: "749 DH",
  },
  {
    id: 5,
    nbrProduits: 9,
    reference: "REF5",
    orderDate: "12/02/2020",
    dilivryDate: "20/02/2020",
    total: "900 DH",
  },
];

export const categories = [
  {
    id: 1,
    name: "McDonald's",
    photo_url:
      "https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/kq8cbwuhwuxzflyhuhnc",
  },
  {
    id: 2,
    name: "Pâtisserie",
    photo_url:
      "https://res.cloudinary.com/glovoapp/w_1200,f_auto,q_auto/Stores/vxx8z2s8nqluusuwnuft",
  },
  {
    id: 0,
    name: "Pizza",
    photo_url:
      "https://images.unsplash.com/photo-1588014164218-d9ecba01aaff?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
  },
  {
    id: 5,
    name: "Traditionnel",
    photo_url:
      "https://static.750g.com/images/1200-630/fcb2b478f86ef255792eb4c84e6f20de/tajine-de-carottes-petits-pois-et-pommes-de-terre.png",
  },
  {
    id: 4,
    name: "Boissons",
    photo_url:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*",
  },
  {
    id: 3,
    name: "Viande",
    photo_url:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
  },
];

export const products = [
  {
    productId: 122,
    categoryId: 3,
    title: "Oatmeal Cookies",
    photo_url:
      "https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg",
    photosArray: [
      "https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg",
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg",
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e",
      "https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg",
    ],
    time: "15",
    ingredients: [
      [0, "200ml"],
      [1, "5g"],
      [2, "300g"],
    ],
    description:
      "-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.",
  },
  {
    productId: 3,
    categoryId: 4,
    title: "Triple Berry Smoothie",
    photo_url:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*",
    photosArray: [
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*",
      "https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg",
      "http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ",
    ],
    time: "10",
    ingredients: [
      [59, "1"],
      [60, "1/2 lbs"],
      [61, "1/2 liters"],
    ],
    description:
      "In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.",
  },
  {
    productId: 2,
    categoryId: 5,
    title: "طاجين البرقوق",
    photo_url:
      "https://www.auxdelicesdupalais.net/wp-content/uploads/2015/08/1-tajine-berb%C3%A8re-aux-l%C3%A9gumesDSC02343.jpg",
    photosArray: [
      "https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg",
      "https://ichef.bbci.co.uk/news/660/cpsprodpb/B2C0/production/_106106754_vegnuggets976.jpg",
      "https://pixel.nymag.com/imgs/daily/grub/2017/11/22/22-mcds-chicken-tenders.w330.h330.jpg",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fgettyimages-508510211.jpg%3Fitok%3Dh-Uryi8r&w=400&c=sc&poi=face&q=85",
    ],
    time: "30",
    ingredients: [
      [0, "2 quarts"],
      [16, "1"],
      [12, "1 cup"],
      [18, "1 cup"],
      [19, "1 teaspoon"],
      [1, "2 teaspoons"],
      [4, "1/4 teaspoons"],
      [7, "1/8 teaspoons"],
      [20, "1/2 teaspoons"],
      [21, "4"],
    ],
    description:
      "-- Beat the egg and then combine it with water in a bowl. Stir. Combine the flour, salt, MSG, pepper, onion powder and garlic powder in a gallon size zip lock bag. Pound each of the breast filets until about 1/4-inch thick. Then cut into bite sized pieces. Coat each piece with the flour mixture by shaking in the zip lock bag. Remove and coat in the egg mixture. Then coat in the flour mixture again. Shake to coat. Deep fry at 375 degrees for 10-12 minutes, until browned and crispy.",
  },
  {
    productId: 3,
    categoryId: 5,
    title: "Couscous Marocain",
    photo_url:
      "https://fr.le7tv.ma/wp-content/uploads/2020/02/0d0676a0-a921-4f78-a1c2-71d1d9e63c31.jpg",
    photosArray: [
      "https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg",
      "https://cdn.junglecreations.com/wp/junglecms/2018/07/4164c5bd-wide-thumbnail.jpg",
      "https://pinchofyum.com/wp-content/uploads/Crunchwrap-Inside.jpg",
      "https://monsonmadethis.com/wp-content/uploads/2017/10/IMG_20171015_161017_025-e1533869302263.jpg",
    ],
    time: "45",
    ingredients: [
      [0, "2 tablespoons"],
      [22, "1/2"],
      [23, "2 tablespoons"],
      [7, "2 cloves"],
      [3, "1 teaspoon"],
      [24, "1 tablespoon"],
      [25, "1 lb"],
      [1, "2 teaspoons"],
      [4, "2 teaspoons"],
      [26, "15 oz"],
      [27, "8"],
      [28, "2"],
      [29, "1 cup"],
    ],
    description:
      "-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps",
  },
  {
    productId: 1,
    categoryId: 3,
    title: "Brownies",
    photo_url:
      "https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg",
    photosArray: [
      "https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg",
      "https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg",
      "http://www.recipe4living.com/assets/itemimages/400/400/3/83c29ac7418067c2e74f31c8abdd5a43_477607049.jpg",
      "https://www.franchisechatter.com/wp-content/uploads/2014/08/KFC-Photo-by-James.jpg",
    ],
    time: "30",
    ingredients: [
      [1, "2 tablespoons"],
      [3, "1 tablespoon"],
      [4, "1 teaspoon"],
      [5, "1/2 teaspoons"],
      [6, "1/2 teaspoons"],
      [7, "1/2 teaspoons"],
      [8, "1/2 teaspoons"],
      [9, "1/2 teaspoons"],
      [10, "1/2 teaspoons"],
      [11, "1/2 teaspoons"],
      [12, "1/2 cups"],
      [13, "1 tablespoon"],
      [14, "1 tablespoon"],
      [15, "2 breasts, 2 thighs, 2 drumsticks, 2 wings"],
      [16, "1"],
      [17, "2 quarts"],
    ],
    description:
      "-- Preheat fryer to 350°F. Thoroughly mix together all spices. Combine spices with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken.\n\n -- Repeat with all the chicken pieces. Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit. Fry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F. Let chicken drain on a few paper towels when it comes out of the fryer. Serve hot.",
  },
  {
    productId: 96,
    categoryId: 1,
    title: "Humberger Deluxe",
    photo_url:
      "https://d2wtgwi3o396m5.cloudfront.net/recipe/bb20bba8-5000-4d31-a0a6-3cc36beecd97.jpeg",
    photosArray: [
      "http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg",
      "https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg",
      "https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg",
    ],
    time: "35",
    ingredients: [
      [30, "jucie of 1 "],
      [24, "2 teaspoons"],
      [0, "3 tablespoons"],
      [3, "1 teaspoon"],
      [31, "1/2 teaspoons"],
      [32, "1/2 teaspoons"],
      [4, "2 teaspoons"],
      [33, "1/2 lb"],
      [27, "8"],
      [14, "2 teasponns"],
      [34, "1"],
    ],
    description:
      "-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. ",
  },
  {
    productId: 97,
    categoryId: 1,
    title: "Humberger Deluxe",
    photo_url:
      "https://d2wtgwi3o396m5.cloudfront.net/recipe/bb20bba8-5000-4d31-a0a6-3cc36beecd97.jpeg",
    photosArray: [
      "http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg",
      "https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg",
      "https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg",
    ],
    time: "35",
    ingredients: [
      [30, "jucie of 1 "],
      [24, "2 teaspoons"],
      [0, "3 tablespoons"],
      [3, "1 teaspoon"],
      [31, "1/2 teaspoons"],
      [32, "1/2 teaspoons"],
      [4, "2 teaspoons"],
      [33, "1/2 lb"],
      [27, "8"],
      [14, "2 teasponns"],
      [34, "1"],
    ],
    description:
      "-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. ",
  },
  {
    productId: 98,
    categoryId: 1,
    title: "Humberger Deluxe",
    photo_url:
      "https://d2wtgwi3o396m5.cloudfront.net/recipe/bb20bba8-5000-4d31-a0a6-3cc36beecd97.jpeg",
    photosArray: [
      "http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg",
      "https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg",
      "https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg",
    ],
    time: "35",
    ingredients: [
      [30, "jucie of 1 "],
      [24, "2 teaspoons"],
      [0, "3 tablespoons"],
      [3, "1 teaspoon"],
      [31, "1/2 teaspoons"],
      [32, "1/2 teaspoons"],
      [4, "2 teaspoons"],
      [33, "1/2 lb"],
      [27, "8"],
      [14, "2 teasponns"],
      [34, "1"],
    ],
    description:
      "-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. ",
  },

  {
    productId: 5,
    categoryId: 1,
    title: "Small World Famous Fries",
    photo_url:
      "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-fries-small.jpg?$Product_Desktop$",
    photosArray: [
      "https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg",
      "https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg",
      "https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ",
    ],
    time: 35,
    ingredients: [
      [9, "1/2 teaspoons"],
      [0, "4 tablespoons"],
      [1, "1/2 teaspoons"],
      [30, "2 tablespoons"],
      [31, "1 teaspoon"],
      [7, "1 teaspoon"],
      [24, "1/2 teaspoons"],
      [3, "1/2 teaspoons"],
      [21, "1 pound"],
      [22, "1/2 cup"],
      [27, "6"],
      [36, "4"],
      [37, "1/2"],
      [38, "1/2"],
    ],
    description:
      "-- In a large bowl, combine 2 tablespoons oil, lemon juice and seasonings; add the chicken. Turn to coat; cover. Refrigerate for 1-4 hours In a large skillet, saute peppers and onions in remaining oil until crisp-tender. Remove and keep warm. Drain chicken, discarding marinade. In the same skillet, cook chicken over medium-high heat for 5-6 minutes or until no longer pink.\n\n -- Return pepper mixture to pan; heat through. Spoon filling down the center of tortillas; fold in half. Serve with toppings as desired.",
  },
  {
    productId: 99,
    categoryId: 1,
    title: "Humberger Deluxe",
    photo_url:
      "https://d2wtgwi3o396m5.cloudfront.net/recipe/bb20bba8-5000-4d31-a0a6-3cc36beecd97.jpeg",
    photosArray: [
      "http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg",
      "https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg",
      "https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg",
    ],
    time: "35",
    ingredients: [
      [30, "jucie of 1 "],
      [24, "2 teaspoons"],
      [0, "3 tablespoons"],
      [3, "1 teaspoon"],
      [31, "1/2 teaspoons"],
      [32, "1/2 teaspoons"],
      [4, "2 teaspoons"],
      [33, "1/2 lb"],
      [27, "8"],
      [14, "2 teasponns"],
      [34, "1"],
    ],
    description:
      "-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. ",
  },
  {
    productId: 100,
    categoryId: 1,
    title: "Humberger Deluxe",
    photo_url:
      "https://d2wtgwi3o396m5.cloudfront.net/recipe/bb20bba8-5000-4d31-a0a6-3cc36beecd97.jpeg",
    photosArray: [
      "http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg",
      "https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg",
      "https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg",
    ],
    time: "35",
    ingredients: [
      [30, "jucie of 1 "],
      [24, "2 teaspoons"],
      [0, "3 tablespoons"],
      [3, "1 teaspoon"],
      [31, "1/2 teaspoons"],
      [32, "1/2 teaspoons"],
      [4, "2 teaspoons"],
      [33, "1/2 lb"],
      [27, "8"],
      [14, "2 teasponns"],
      [34, "1"],
    ],
    description:
      "-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. ",
  },
  {
    productId: 101,
    categoryId: 1,
    title: "Humberger Deluxe",
    photo_url:
      "https://d2wtgwi3o396m5.cloudfront.net/recipe/bb20bba8-5000-4d31-a0a6-3cc36beecd97.jpeg",
    photosArray: [
      "http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg",
      "https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg",
      "https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg",
    ],
    time: "35",
    ingredients: [
      [30, "jucie of 1 "],
      [24, "2 teaspoons"],
      [0, "3 tablespoons"],
      [3, "1 teaspoon"],
      [31, "1/2 teaspoons"],
      [32, "1/2 teaspoons"],
      [4, "2 teaspoons"],
      [33, "1/2 lb"],
      [27, "8"],
      [14, "2 teasponns"],
      [34, "1"],
    ],
    description:
      "-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. ",
  },
  {
    productId: 6,
    categoryId: 0,
    title: "Buffalo Pizza",
    photo_url:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    photosArray: [
      "https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg",
      "http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg",
      "https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif",
    ],
    time: 50,
    ingredients: [
      [39, "1 lb"],
      [40, "1 cup"],
      [41, "1/2 cup"],
      [42, "1/4 cup"],
      [43, "2 tablespoons"],
      [44, "1/2 cup"],
      [7, "1/4 teaspoons"],
      [5, "1/4 teaspoons"],
      [30, "1/4 teaspoons"],
      [45, "2 oz"],
      [12, "for dusting"],
      [4, "1/2 teaspoons"],
      [47, "2"],
      [46, "9 oz"],
    ],
    description:
      "-- Place a rack in upper third of oven. Place a large cast-iron skillet on rack and preheat oven to 500° (or as high as your oven will go). Place pizza dough in a large bowl, pour a little oil over, and turn to coat. Cover bowl with plastic and let dough proof at room temperature while pan and oven heat up.\n\n -- Meanwhile, cook hot sauce, marinara sauce, and butter in a medium saucepan over medium heat, stirring occasionally, until butter is melted. Stir in cream, reduce heat to low, and simmer, stirring occasionally, until slightly thickened and warmed through, about 10 minutes. Heat 1 Tbsp. oil in a large skillet over medium-high. Add chicken, toss to coat, then add ¼ cup Buffalo sauce.\n\n -- Cook chicken, tossing occasionally, until heated through, about 2 minutes. Reduce heat and simmer, stirring often, until chicken is well coated and sauce is slightly thickened, about 5 minutes. Meanwhile, whisk yogurt, lemon juice, celery salt, garlic powder, ¼ cup blue cheese, ½ tsp. pepper, and 2 Tbsp. water in a small bowl, adding more water if sauce seems too thick (it should be pourable); set aside.\n\n -- Turn out dough onto a lightly floured work surface. Shape with your hands into a round that’s slightly larger than the cast-iron skillet you’re using. Take hot skillet out of oven (watch that handle!) and place on a heatproof surface. Add a little flour to pan. Lay dough in skillet, then work edges of dough up sides of skillet with your fingertips (use a rubber spatula or wooden spoon if you’re nervous about touching the hot pan). Drizzle a little oil around inside edge of pan so that it trickles behind and underneath dough, which will encourage browning and help it release.\n\n -- Spread about ⅓ cup Buffalo sauce over dough. Arrange mozzarella over, then top with remaining ¼ cup blue cheese. Arrange chicken mixture on top. Bake pizza on top rack until crust and cheese are nicely browned, 15–20 minutes. Transfer skillet to stovetop (again, watch that handle!) and let pizza rest a few minutes. Using a spatula, slide pizza onto a cutting board or platter. Arrange celery over, then top with reserved blue cheese dressing. Season with pepper, then drizzle with oil.",
  },
  {
    productId: 0,
    categoryId: 0,
    title: "Pizza Royal",
    photo_url:
      "https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800",
    photosArray: [
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg",
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e",
      "https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg",
    ],
    time: "15",
    ingredients: [
      [0, "200ml"],
      [1, "5g"],
      [2, "300g"],
    ],
    description:
      "-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.",
  },
  {
    productId: 7,
    categoryId: 2,
    title: "Verrine Chocolat",
    photo_url:
      "https://scontent.frak1-2.fna.fbcdn.net/v/t1.0-9/89511155_2799839283439815_6903730444475301888_o.jpg?_nc_cat=109&ccb=2&_nc_sid=9267fe&_nc_eui2=AeH3k23pGMhxfgCYuvo5EDYQbyITjZS0TDxvIhONlLRMPCqH50j8ZpmncMz2YtInoygvW1mqXgDcyRSXx_KiNzEB&_nc_ohc=ufZw1I1Q1uIAX-QJpUw&_nc_oc=AQm4UWCIYHn8tcqHDSdKaQ4jpS3uFjYbqvWQL1ULWPMis3QdwOFGuz-0jvpJ1kIJHaA&_nc_ht=scontent.frak1-2.fna&oh=7f0b64820c7624f29404812cc3cb53c7&oe=5FE42B8A",
    photosArray: [
      "https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg",
      "https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ",
      "https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg",
    ],
    time: 15,
    ingredients: [
      [48, "50g"],
      [49, "100g"],
      [50, "350g"],
      [51, "2 plump"],
      [42, "50g"],
      [16, "3"],
      [1, "2 teaspoons"],
      [4, "2 teaspoons"],
    ],
    description:
      "-- Put the egg yolks into a bowl, finely grate in the Parmesan, season with pepper, then mix well with a fork and put to one side. Cut any hard skin off the pancetta and set aside, then chop the meat. Cook the spaghetti in a large pan of boiling salted water until al dente.\n\n -- Meanwhile, rub the pancetta skin, if you have any, all over the base of a medium frying pan (this will add fantastic flavour, or use 1 tablespoon of oil instead), then place over a medium-high heat. Peel the garlic, then crush with the palm of your hand, add it to the pan and leave it to flavour the fat for 1 minute. Stir in the pancetta, then cook for 4 minutes, or until it starts to crisp up. Pick out and discard the garlic from the pan, then, reserving some of the cooking water, drain and add the spaghetti.\n\n -- Toss well over the heat so it really soaks up all that lovely flavour, then remove the pan from the heat. Add a splash of the cooking water and toss well, season with pepper, then pour in the egg mixture – the pan will help to cook the egg gently, rather than scrambling it. Toss well, adding more cooking water until it’s lovely and glossy. Serve with a grating of Parmesan and an extra twist of pepper.",
  },
  {
    productId: 8,
    categoryId: 2,
    title: "Verrine Framboise",
    photo_url:
      "https://scontent.frak1-1.fna.fbcdn.net/v/t1.0-9/89318850_2799823850108025_4278500464401580032_o.jpg?_nc_cat=107&ccb=2&_nc_sid=9267fe&_nc_eui2=AeGQ48Qeoh7LvTXX31oJPvQD0alGSWEOQM_RqUZJYQ5Az4LcmOkpaupPyQBCWRYIZSsaqZ5vQMiTyYw0G1hTtb0w&_nc_ohc=vwo68d_M0W0AX_FuAyf&_nc_ht=scontent.frak1-1.fna&oh=96fe72f801bf11378cbc3d142863e866&oe=5FE40E30",
    photosArray: [
      "https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg",
      "https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg",
      "https://images4.alphacoders.com/817/817350.jpg",
    ],
    time: 60,
    ingredients: [
      [36, "1 large"],
      [25, "1 pound"],
      [51, "5 cloves"],
      [52, "1 pound"],
      [53, "1 pound"],
      [54, "1 28 ounce can"],
      [23, "2 6 ounce can"],
      [55, "2 tablespoons"],
      [56, "1/4 cup"],
      [10, "1/2 cup"],
      [1, "1/2 teaspoons"],
      [58, "1 teaspoon"],
      [4, "1/4 teaspoons"],
      [16, "1 large"],
      [46, "1 pound"],
      [48, "1 cup"],
      [57, "30 ounces"],
    ],
    description:
      "-- Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain. Stir in tomatoes, tomato paste, water, sugar, 3 tablespoons parsley, basil, fennel, 1/2 teaspoon salt and pepper; bring to a boil. Reduce heat; simmer, uncovered, 30 minutes, stirring occasionally. In a small bowl, mix egg, ricotta cheese, and remaining parsley and salt. Preheat oven to 375°. Spread 2 cups meat sauce into an ungreased 13x9-in. baking dish. Layer with 3 noodles and a third of the ricotta mixture. Sprinkle with 1 cup mozzarella cheese and 2 tablespoons Parmesan cheese.\n\n -- Repeat layers twice. Top with remaining meat sauce and cheeses (dish will be full). Bake, covered, 25 minutes. Bake, uncovered, 25 minutes longer or until bubbly. Let stand 15 minutes before serving.",
  },
];

export const commandeProducts = [
  {
    productId: 1,
    categoryId: 3,
    quantite: 3,
    unite: "pce",
    prixTotal: "99 DH",
    title: "Oatmeal Cookies",
    photo_url:
      "https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg",
    photosArray: [
      "https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg",
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg",
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e",
      "https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg",
    ],
    time: "15",
    ingredients: [
      [0, "200ml"],
      [1, "5g"],
      [2, "300g"],
    ],
    description:
      "-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.",
  },
  {
    productId: 2,
    categoryId: 4,
    quantite: 5,
    unite: "pce",
    prixTotal: "500 DH",
    title: "Verrine Chocolat",
    photo_url:
      "https://scontent.frak1-2.fna.fbcdn.net/v/t1.0-9/89511155_2799839283439815_6903730444475301888_o.jpg?_nc_cat=109&ccb=2&_nc_sid=9267fe&_nc_eui2=AeH3k23pGMhxfgCYuvo5EDYQbyITjZS0TDxvIhONlLRMPCqH50j8ZpmncMz2YtInoygvW1mqXgDcyRSXx_KiNzEB&_nc_ohc=ufZw1I1Q1uIAX-QJpUw&_nc_oc=AQm4UWCIYHn8tcqHDSdKaQ4jpS3uFjYbqvWQL1ULWPMis3QdwOFGuz-0jvpJ1kIJHaA&_nc_ht=scontent.frak1-2.fna&oh=7f0b64820c7624f29404812cc3cb53c7&oe=5FE42B8A",
    photosArray: [
      "https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg",
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg",
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e",
      "https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg",
    ],
    time: "15",
    ingredients: [
      [0, "200ml"],
      [1, "5g"],
      [2, "300g"],
    ],
    description:
      "-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.",
  },
  {
    productId: 3,
    categoryId: 1,
    quantite: 7,
    unite: "pce",
    prixTotal: "600 DH",
    title: "Pastilla poisson",
    photo_url:
      "https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg",
    photosArray: [
      "https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg",
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg",
      "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e",
      "https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg",
    ],
    time: "15",
    ingredients: [
      [0, "200ml"],
      [1, "5g"],
      [2, "300g"],
    ],
    description:
      "-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.",
  },
];

export const tasks = [
  {
    id: 1,
    nom: "Pastilla au poulet et amandes",
    commandeId: 3,
    productId: 2,
    quantite: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    nom: "Mini Batbout Crevette",
    commandeId: 3,
    productId: 2,
    quantite: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    nom: "Pizza Fruit de Mer",
    commandeId: 3,
    productId: 2,
    quantite: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    nom: "طاجين اللحم بالبرقوق",
    commandeId: 3,
    productId: 2,
    quantite: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    nom: "Couscous Marocain",
    commandeId: 3,
    productId: 2,
    quantite: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 6,
    nom: "Pizza Margarita",
    commandeId: 3,
    productId: 2,
    quantite: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
export const myTasks = [
  {
    id: 1,
    nom: "Pastilla au poulet et amandes",
    commandeId: 3,
    productId: 2,
    quantite: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    nom: "Mini Batbout Crevette",
    commandeId: 3,
    productId: 2,
    quantite: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
