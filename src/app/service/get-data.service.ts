import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() {}


    // subcategory data .

    subCategorisFilterData = [
      { id: 1, categories: 'appliances', subcategories: 'mobile' },
      { id: 2, categories: 'appliances', subcategories: 'smart tv' },
      { id: 3, categories: 'appliances', subcategories: 'air cooler' },
      { id: 4, categories: 'appliances', subcategories: 'refrigerator' },
      { id: 5, categories: 'fashion', subcategories: 'tshirt' },
      { id: 6, categories: 'fashion', subcategories: 'jeans' },
      { id: 7, categories: 'homeandfurniture', subcategories: 'sofa' },
      { id: 8, categories: 'homeandfurniture', subcategories: 'table' },
      { id: 9, categories: 'homeandfurniture', subcategories: 'cover' },
      { id: 10, categories: 'toys', subcategories: 'puzzle' },
      { id: 11, categories: 'toys', subcategories: 'cars' },
      { id: 12, categories: 'toys', subcategories: 'toys' }
    ];
  // category data 
  categoriesData = [
    {
      id: 1,
      name: 'Fashion',
      img: '../../assets/images/categoriesimg/fashion.webp',
      code: 'fashion',
    },
    {
      id: 2,
      name: 'Home & Furniture',
      img: '../../assets/images/categoriesimg/home.webp',
      code: 'homeandfurniture',
    },
    {
      id: 3,
      name: 'Appliance',
      img: '../../assets/images/categoriesimg/appliance.webp',
      code: 'appliances',
    },
    {
      id: 4,
      name: 'Toys',
      img: '../../assets/images/categoriesimg/toys.webp',
      code: 'toys',
    },
  ];

  // product details 

  productData = [
    {
      pdId: 8565,
      pdName: "SAMSUNG Galaxy F04 (Opal Green, 64 GB)",
      pdDesc: "Display: The Galaxy F04 features a 6.5-inch PLS LCD display with a resolution of 720 x 1600 pixels. While not the highest resolution, it provides a decent viewing experience for everyday use. Design and Build: The phone has a glossy finish and a waterdrop-style display notch. Its dimensions are 164.2 x 75.9 x 9.1 mm, and it weighs 188 grams. The build includes a glass front and a plastic back and frame1. Camera System: Rear Cameras: The dual rear camera setup consists of a 13 MP wide-angle lens (with autofocus) and a 2 MP depth sensor. While not flagship-level, it allows for decent photography and basic depth effects. Front Camera: The front-facing camera is a 5 MP lens for selfies and video calls. Performance: Processor: The Galaxy F04 is powered by the Mediatek MT6765 Helio P35 chipset, which includes an octa-core CPU (4x2.35 GHz Cortex-A53 and 4x1.8 GHz Cortex-A53) and a PowerVR GE8320 GPU. It’s suitable for everyday tasks and light gaming. Memory: It comes with 4 GB of RAM and 64 GB of internal storage, expandable via a dedicated microSDXC slot. Battery Life: The phone packs a 5000 mAh non-removable battery, providing long-lasting usage. It supports 15W wired charging. Connectivity and Features: Wi-Fi: Wi-Fi 802.11 b/g/n with Wi-Fi Direct. Bluetooth: Version 5.0 with A2DP and LE. Positioning: GPS, GLONASS, GALILEO, and BDS. USB: USB Type-C 2.0. Sensors: Accelerometer and proximity sensors.",
      pdPrice: 11499,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/images/productimg/samasungmobile.webp",
      pdRatings: "4.25/5",
      userImg:"../../assets/images/userImg/user.jpg",
      review1:"I feel so LUCKY to have found this used (phone to us & not used hard at all), phone on line from someone who upgraded and sold this one. My Son liked his old one that finally fell apart after 2.5+ years and didn't want an upgrade!! Thank you Seller, we really appreciate it & your honesty re: said used phone.I recommend this seller very highly & would but from them again!!",
      review2:"nice phone, nice up grade from my pantach revue. Very clean set up and easy set up. never had an android phone but they are fantastic to say the least. perfect size for surfing and social media. great phone samsung",
      review3:"It works good but it goes slow sometimes but its a very good phone I love it",
      review4:"Great phone to replace my lost phone. The only thing is the volume up button does not work, but I can still go into settings to adjust. Other than that, it does the job until I am eligible to upgrade my phone again.Thaanks!",
      review5:"I already had a phone with problems... I know it stated it was used, but dang, it did not state that it did not charge. I wish I would have read these comments then I would have not purchased this item.... and its cracked on the side.. damaged goods is what it is.... If trying to charge it another way does not work I am requesting for my money back... AND I WILL GET MY MONEY BACK...SIGNED AN UNHAPPY CUSTOMER....",
      review6:"The charging port was loose. I got that soldered in. Then needed a new battery as well. $100 later (not including cost of purchase) I have a usable phone. The phone should not have been sold in the state it was in.",
      review7:"Phone looks good but wouldn't stay charged, had to buy new battery. Still couldn't stay charged long.so I trashed it.MONEY lost, never again will I buy from this person! !!!",
      review8:"I originally was using the Samsung S2 Galaxy for Sprint and wanted to return back to the Samsung EPIC 4G for Sprint because I really missed the keyboard, I really liked the smaller compact size of the phone, and I still needed some of the basic functions of a smart phone (i.e. checking e-mail, getting directions, text messaging) Because the phone is not as powerful as the newer cell phones out there, just be aware that the more applications you install the slower the phone runs and will most likely freeze up from time to time. But the camera works great, the video is great as well, and even the web browsing is decent and gives me what I need. I also notice that battery life lasts a little bit longer and charging the phone is much quicker than my Galaxy S2.",
      review9:"It's battery life is great. It's very responsive to touch. The only issue is that sometimes the screen goes black and you have to press the top button several times to get the screen to re-illuminate.",
      review10:"My fiance had this phone previously, but caused many problems. So, of course, we decided to browse amazon for a replacement til' our contract is up! & so far so good!",
      review11:"A friend mentioned this phone to me and it worth what he said. Thanks a lot my friend.",
      review12:"excellent product !!....all right....i recommend....",
      review13:"Bought this as an alternative to a smart phone and data plan. I use it with Go-Phone on a pay-as-you-go plan. The phone functions are great. The radio and music players are very good sound quality. The smart phone type features are easier and faster to use than any smart phone I have used. There are some software glitches that are documented on the Nokia support site which proved easily fixed. Even though many of the Nokia based features are no longer supported by Microsoft, you can still use the features needed by accessing the web directly via WIFI connection - or data if you want to pay for the privilege - and launching the site/application from there. Although the new Nokia browser is pretty Spartan in appearance, it is fast and runs with good stability. I am a very big guy with lands large even for my size and I find the full qwerty keyboard to be pretty easy to use. I like the programmable hot keys and on-screen shortcuts. Keeps you from launching items that require data connections by accident. The back lighting is thorough and even and the raised buttons are tactile with a positive click response. The phone does have a few quirks. There is no airplane mode as far as I can tell. The flight profile doesn't seem to be able to be set with the broadcasting and receiving functions turned off. The main navigation button/mouse is a little small and doesn't always respond as expected - that might be me though. All in all I would recommend this phone and vendor highly if you want the features of a smart phone but you don't need GPS or a big data bill every month for a bunch of things you don't need or want to keep you life running smoothly.",
      review14:"perfect, practical, easy to handle, good resolution, well packed",
      review15:"muy buen producto",
      review16:"Freezes alot. But i bought primarily for playing back my music instead of my BB. Its a great phone for SMS and rings really loud. The body is strong and neat",
      review17:"solid phone",
      review18:"Bought it as a gift for my Mum and she loves it. It is a strong durable phone, has good reception and it functions well.",
      review19:"Shipped quickly and was exactly what I expected!",
      review20:"loved everything about it. also it looks like any other touch phone but is not. which makes it stylish yet classic.",
      reviewSummary:"loved everything about it. also it looks like any other touch phone but is not. which makes it stylish yet classic. Shipped quickly and was exactly what I expected!.I feel so LUCKY to have found this used (phone to us & not used hard at all), phone on line from someone who upgraded and sold this one. My Son liked his old one that finally fell apart after 2.5+ years and didn't want an upgrade!! Thank you Seller, we really appreciate it & your honesty re: said used phone.I recommend this seller very highly & would but from them again!!. nice phone, nice up grade from my pantach revue. Very clean set up and easy set up. never had an android phone but they are fantastic to say the least. perfect size for surfing and social media. great phone samsung. It works good but it goes slow sometimes but its a very good phone I love it. Great phone to replace my lost phone. The only thing is the volume up button does not work, but I can still go into settings to adjust. Other than that, it does the job until I am eligible to upgrade my phone again.Thaanks!. I already had a phone with problems... I know it stated it was used, but dang, it did not state that it did not charge. I wish I would have read these comments then I would have not purchased this item.... and its cracked on the side.. damaged goods is what it is.... If trying to charge it another way does not work I am requesting for my money back... AND I WILL GET MY MONEY BACK...SIGNED AN UNHAPPY CUSTOMER. The charging port was loose. I got that soldered in. Then needed a new battery as well. $100 later (not including cost of purchase) I have a usable phone. The phone should not have been sold in the state it was in. It's battery life is great. It's very responsive to touch. The only issue is that sometimes the screen goes black and you have to press the top button several times to get the screen to re-illuminate. My fiance had this phone previously, but caused many problems. So, of course, we decided to browse amazon for a replacement til' our contract is up! & so far so good!. A friend mentioned this phone to me and it worth what he said. Thanks a lot my friend. Bought this as an alternative to a smart phone and data plan. I use it with Go-Phone on a pay-as-you-go plan. The phone functions are great. The radio and music players are very good sound quality. The smart phone type features are easier and faster to use than any smart phone I have used. There are some software glitches that are documented on the Nokia support site which proved easily fixed. Even though many of the Nokia based features are no longer supported by Microsoft, you can still use the features needed by accessing the web directly via WIFI connection - or data if you want to pay for the privilege - and launching the site/application from there. Although the new Nokia browser is pretty Spartan in appearance, it is fast and runs with good stability. I am a very big guy with lands large even for my size and I find the full qwerty keyboard to be pretty easy to use. I like the programmable hot keys and on-screen shortcuts. Keeps you from launching items that require data connections by accident. The back lighting is thorough and even and the raised buttons are tactile with a positive click response. The phone does have a few quirks. There is no airplane mode as far as I can tell. The flight profile doesn't seem to be able to be set with the broadcasting and receiving functions turned off. The main navigation button/mouse is a little small and doesn't always respond as expected - that might be me though. All in all I would recommend this phone and vendor highly if you want the features of a smart phone but you don't need GPS or a big data bill every month for a bunch of things you don't need or want to keep you life running smoothly. muy buen producto. solid phone. Bought it as a gift for my Mum and she loves it. It is a strong durable phone, has good reception and it functions well."
    },
    {
      pdId: 8566,
      pdName: "Apple iPhone 15 (Blue, 128 GB)",
      pdDesc: "Advanced Camera System: The iPhone 15 features an upgraded camera system with improved sensors, enhanced low-light performance, and computational photography capabilities. Users can capture stunning photos and videos with ease. A15 Bionic Chip:- Apple’s custom-designed A15 Bionic chip powers the iPhone 15, delivering impressive performance and energy efficiency. Whether you’re multitasking, gaming, or using demanding apps, the A15 chip ensures a smooth experience. 5G Connectivity:- The iPhone 15 supports 5G networks, allowing for faster download speeds, reduced latency, and improved overall connectivity. Streaming, video calls, and online gaming benefit from this next-generation network technology. ProMotion Display:- The iPhone 15 features a ProMotion display with a high refresh rate (up to 120Hz). This results in smoother animations, more responsive touch interactions, and an overall fluid user experience. Enhanced Face ID:- Face ID, Apple’s facial recognition technology, has been refined in the iPhone 15. It’s faster, more accurate, and works from wider angles, making unlocking your phone and authorizing payments seamless. Longer Battery Life:- The iPhone 15 offers improved battery life compared to its predecessors. Whether you’re browsing, streaming, or playing games, you’ll enjoy extended usage without worrying about running out of power.",
      pdPrice: 79900,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/images/productimg/appleiphone15.webp",
      pdRatings: "4.5/5",
      userImg:"../../assets/images/userImg/user.jpg",
      review1:"Best phone ever! Great service and product!",
      review2:"Great quality, cool features, the screen color is excellent. The phone met my expectations.",
      review3:"It works good but it goes slow sometimes but its a very good phone I love it",
      review4:"Great phone to replace my lost phone. The only thing is the volume up button does not work, but I can still go into settings to adjust. Other than that, it does the job until I am eligible to upgrade my phone again.Thaanks!",
      review5:"I already had a phone with problems... I know it stated it was used, but dang, it did not state that it did not charge. I wish I would have read these comments then I would have not purchased this item.... and its cracked on the side.. damaged goods is what it is.... If trying to charge it another way does not work I am requesting for my money back... AND I WILL GET MY MONEY BACK...SIGNED AN UNHAPPY CUSTOMER....",
      review6:"The charging port was loose. I got that soldered in. Then needed a new battery as well. $100 later (not including cost of purchase) I have a usable phone. The phone should not have been sold in the state it was in.",
      review7:"Phone looks good but wouldn't stay charged, had to buy new battery. Still couldn't stay charged long.so I trashed it.MONEY lost, never again will I buy from this person! !!!",
      review8:"Received a brand new international version (phone) as described.Packing was good and no damage to the phone.So far so good!!!",  
      review9:"It's battery life is great. It's very responsive to touch. The only issue is that sometimes the screen goes black and you have to press the top button several times to get the screen to re-illuminate.",
      review10:"Love this phone worked great with straight talk very fast shipping very satisfied love love love the G3",
      review11:"Switched from samsung and very happy with my new Iphone expensive alternative to the same quality maybe even better .",
      review12:"excellent product !!....all right....i recommend....",
      review13:"The phone works great in US. The features are awesome. However, the charger does not work in US. I've been charging via my laptop. This takes longer and drains faster. I've to constantly keep charging.",
      review14:"Love it! The camera is awesome and it worked perfectly both in the US and here in Sweden. The functions of the phone are absolutely awesome and works fast!",
      review15:"Fast delivery, GOOD JOB",
      review16:"Not satisfied phone is over heating",
      review17:"Phone's display is very good. Other than that it's quite flimsy. Be aware that International version will NOT support ATT's 4G speeds (bands are not in software), plus it will not support Visual Voicemail as this is not their base version of OS. Sometimes freezes up. Battery charges slow. Camera on the phone is not so great it requires a LOT of light to make a good picture. I was about to live with it because of the big screen, but phone suddenly quit on me and will not even turn on! There're obvious issues with reliability, not sure if I am returning back to this model. Returning mine back!",
      review18:"While the phone itself is great - it is simply not as unlocked as advertised. I specifically ordered an unlocked international phone for use internationally, yet the product I received is from Verizon - branded and such and with serious Verizon limitiations, inlcuding a block on using the wifi hotspot with any SIM that it not a Verizon one (and since I am abroad, I do not use a Verizon SIM). That is an important feature for me and I am very disappointed that this was not posted int eh product description.Also, special numbers that begin with a * are not accepted by this Verizon phone.In summary, I thought I would be receiving a pristine new phone for use abroad, while in fact this is a US-Centric Verizon phone that is partially unlocked. If anyone has a good wifi hotspot app to recommend to troubleshoot this deliberate flaw I would really appreciate it.",
      review19:"Delivered on time. This cell phone is just great. I was worried about the battery consumption before buying it, now that I have it I think they did good job in this topic because the battery duration is just as good as other similar devices. I wouldn't say it's outstanding but good enough.In all other aspects the phone is excellent.",
      review20:"This is a really nice phone I love it but it has some issues the network dropping of and will not come back on until I restart the phone and sometimes it freezes for a few seconds sometimes shipping was fast tho but I guess I just got a bad phone highly disappointed",
      reviewSummary: "Best phone ever! Great service and product!, Great quality, cool features, the screen color is excellent. The phone met my expectations, Great phone to replace my lost phone. The only thing is the volume up button does not work, but I can still go into settings to adjust. Other than that, it does the job until I am eligible to upgrade my phone again.Thaanks!, I already had a phone with problems... I know it stated it was used, but dang, it did not state that it did not charge. I wish I would have read these comments then I would have not purchased this item.... and its cracked on the side.. damaged goods is what it is.... If trying to charge it another way does not work I am requesting for my money back... AND I WILL GET MY MONEY BACK...SIGNED AN UNHAPPY CUSTOMER...., Received a brand new international version (phone) as described.Packing was good and no damage to the phone.So far so good!!!, It's battery life is great. It's very responsive to touch. The only issue is that sometimes the screen goes black and you have to press the top button several times to get the screen to re-illuminate, Love this phone worked great with straight talk very fast shipping very satisfied love love love the G3. Switched from samsung and very happy with my new Iphone expensive alternative to the same quality maybe even better. excellent product !!....all right....i recommend. The phone works great in US. The features are awesome. However, the charger does not work in US. I've been charging via my laptop. This takes longer and drains faster. I've to constantly keep charging. Fast delivery, GOOD JOB. Phone's display is very good. Other than that it's quite flimsy. Be aware that International version will NOT support ATT's 4G speeds (bands are not in software), plus it will not support Visual Voicemail as this is not their base version of OS. Sometimes freezes up. Battery charges slow. Camera on the phone is not so great it requires a LOT of light to make a good picture. I was about to live with it because of the big screen, but phone suddenly quit on me and will not even turn on! There're obvious issues with reliability, not sure if I am returning back to this model. Returning mine back. While the phone itself is great - it is simply not as unlocked as advertised. I specifically ordered an unlocked international phone for use internationally, yet the product I received is from Verizon - branded and such and with serious Verizon limitiations, inlcuding a block on using the wifi hotspot with any SIM that it not a Verizon one (and since I am abroad, I do not use a Verizon SIM). That is an important feature for me and I am very disappointed that this was not posted int eh product description.Also, special numbers that begin with a * are not accepted by this Verizon phone.In summary, I thought I would be receiving a pristine new phone for use abroad, while in fact this is a US-Centric Verizon phone that is partially unlocked. If anyone has a good wifi hotspot app to recommend to troubleshoot this deliberate flaw I would really appreciate it. This is a really nice phone I love it but it has some issues the network dropping of and will not come back on until I restart the phone and sometimes it freezes for a few seconds sometimes shipping was fast tho but I guess I just got a bad phone highly disappointed"
    },
    {
      pdId: 8567,
      pdName: "BAJAJ 36 L Room/Personal Air Cooler  (White, Platini Coolest - Torque PX 97)",
      pdDesc: "Bajaj PX 97 torque is a durable, compact and portable room cooler that can be placed in offices as well in bedrooms for effective cooling, it is constructed from corrosion-free, engineered thermoplastic material",
      pdPrice: 7450,
      pdCategory: "appliances",
      pdSubCategory: "air cooler",
      pdImg: "../../assets/images/productimg/aircooler.webp",
      pdRatings: "3.25/5"
    },

    {
      pdId: 8568,
      pdName: "SONY 125.7 cm (50 inch)",
      pdDesc: "You can enjoy the brilliant colours and explore new worlds in 4K resolution on this Sony Google TV. The powerful X1 4K processor brings every colour to life so that you can enjoy your favourite content.",
      pdPrice: 74000,
      pdCategory: "appliances",
      pdSubCategory: "smart tv",
      pdImg: "../../assets/images/productimg/smartvsony.webp",
      pdRatings: "4/5"
    },
    {
      pdId: 8569,
      pdName: "SAMSUNG 256 L Frost Free Double Door 3 Star Convertible Refrigerator with Convertible, Digital Inverter with Display  (Luxe Black, RT30C3733BX/HL)",
      pdDesc: "You can stock up on your weekly groceries and easily store them in the Samsung Refrigerator. Moreover, you can even store additional groceries and other food items in this refrigerator by converting the freezer into a fridge",
      pdPrice: 44990,
      pdCategory: "appliances",
      pdSubCategory: "refrigerator",
      pdImg: "../../assets/images/productimg/refrigeratorsamsung.webp",
      pdRatings: "2.25/5"
    },
    {
      pdId: 8570,
      pdName: "Nokia 130 Music Dual Sim, Music Player, Wireless FM Radio and Dedicated Music Buttons",
      pdDesc: "130 Music Dual Sim, Music Player, Wireless FM Radio and Dedicated Music Buttons",
      pdPrice: 2199,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/images/productimg/nokiamobile.webp",
      pdRatings: "4.25/5"
    },
    {
      pdId: 8571,
      pdName: "Men Solid Round Neck Pure Cotton Dark Green T-Shirt",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 200,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/images/productimg/men-fashion-2.webp",
      pdSize: ["S", "M", "L", "XL"],
      pdRatings: "4/5"
    },
    {
      pdId: 8572,
      pdName: "Men Printed Round Neck Cotton Blend Blue T-Shirt",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 500,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/images/productimg/men-fashion-3.webp",
      pdSize: ["S", "M", "L", "XL"],
      pdRatings: "4.5/5"

    },
    {
      pdId: 8573,
      pdName: "Women Solid Round Neck Pure Cotton Purple T-Shirt",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 800,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/images/productimg/women-fashion-1.webp",
      pdSize: ["S", "M", "L", "XL"],
      pdRatings: "3/5"
    },
    {
      pdId: 8574,
      pdName: "Men Regular Mid Rise Blue Jeans",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 550,
      pdCategory: "fashion",
      pdSubCategory: "jeans",
      pdImg: "../../assets/images/productimg/men-fashion-jeans-1.webp",
      pdSize: [30, 32, 34],
      pdRatings: "4.15/5"
    },
    {
      pdId: 8575,
      pdName: "Women Flared Mid Rise Blue Jeans",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 1500,
      pdCategory: "fashion",
      pdSubCategory: "jeans",
      pdImg: "../../assets/images/productimg/women-fashion-jeans-1.webp",
      pdSize: [26, 28, 30, 32, 34],
      pdRatings: "4.75/5"
    },
    {
      pdId: 8576,
      pdName: "Cortina Polyester Striped Sofa Cover  (Brown / Drak Brown Pack of 1)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 1500,
      pdCategory: "homeandfurniture",
      pdSubCategory: "cover",
      pdImg: "../../assets/images/productimg/hnf-cover-1.webp",
      pdRatings: "4.25/5"
    },
    {
      pdId: 8577,
      pdName: "Cortina Cotton Curtain for , Boho Curtain with Stainless Steel Rings Curtain Fabric  (Brown, 153 m)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 2500,
      pdCategory: "homeandfurniture",
      pdSubCategory: "cover",
      pdImg: "../../assets/images/productimg/hnf-curtain-2.webp",
      pdRatings: "4.25/5"
    },
    {
      pdId: 8578,
      pdName: "Decorum 204 TC Microfiber Double Floral Flat Bedsheet  (Pack of 1, Green)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 2500,
      pdCategory: "homeandfurniture",
      pdSubCategory: "cover",
      pdImg: "../../assets/images/productimg/hnf-cover-2.webp",
      pdRatings: "4.25/5"
    },
    {
      pdId: 8579,
      pdName: "Seventh Heaven Milan 3 Seater Sofa",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 15000,
      pdCategory: "homeandfurniture",
      pdSubCategory: "sofa",
      pdImg: "../../assets/images/productimg/hnf-sofa-1.webp",
      pdRatings: "4.25/5"
    },
    {
      pdId: 8580,
      pdName: "Allie Wood Solid Wood Study Table",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 10000,
      pdCategory: "homeandfurniture",
      pdSubCategory: "table",
      pdImg: "../../assets/images/productimg/hnf-table-1.webp",
      pdRatings: "4.25/5"
    },
    {
      pdId: 8581,
      pdName: "spincart Mini Monster",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 300,
      pdCategory: "toys",
      pdSubCategory: "cars",
      pdImg: "../../assets/images/productimg/toy-1.webp",
      pdRatings: "4.25/5"
    },
    {
      pdId: 8582,
      pdName: "PP INFINITY Ford 12V Electric Ride On Car For Kids With Remote Control, Music Light 1-6 Yrs Car Battery Operated Ride On  (Black)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 25000,
      pdCategory: "toys",
      pdSubCategory: "cars",
      pdImg: "../../assets/images/productimg/toy-2.webp",
      pdRatings: "4.25/5"
    },
    {
      pdId: 8583,
      pdName: "BOZICA Wooden Educational Creative learning A To Z English Alphabets Board Puzzle  (27 Pieces)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 700,
      pdCategory: "toys",
      pdSubCategory: "puzzle",
      pdImg: "../../assets/images/productimg/toy-3.webp",
      pdRatings: "4.25/5"
    },
    {
      pdId: 8584,
      pdName: "Aapaga Action Figure Super Heros Toy Set",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 500,
      pdCategory: "toys",
      pdSubCategory: "toys",
      pdImg: "../../assets/images/productimg/toy-4.webp",
      pdRatings: "4.25/5"
    },
  ];

//  

}
