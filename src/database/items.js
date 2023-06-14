export const COLORS = {
  white: '#ffffff',
  black: '#000000',
  lightGray: '#B3B4B6',
  accent: '#FFC231',
  accentRed: '#FB5D2E',
  accentPink: '#F96165',
  whitesmoke:'#f5f5f5'
};

export const Categories = [
  {
    name: 'Burger',
    image: require ('../database/images/burger.png'),
    items: [
      {

        name: 'Classic Burger',
        rating: '5.0',
        price: 400,
        isTopOfTheWeek: true,
        image: require ('../database/images/Burger/1.jpg'),
      },
      {
        
       
        name: 'Grilled Burger',
        rating: '4.0',
        price: 350,
        isTopOfTheWeek: false,
        image: require ('../database/images/Burger/2.jpg'),
      },
      {
        
        name: 'Cheese Burger',
        rating: '4.0',
        price: 450,
        isTopOfTheWeek: true,
        image: require ('../database/images/Burger/3.jpg'),
      },
      {
        
        name: 'Zinger Burger',
        rating: '5.5',
        price: 550,
        isTopOfTheWeek: true,
        image: require ('../database/images/Burger/4.jpg'),
      },
      {
        
        name: 'Master Burger',
        rating: '4.0',
        price: 450,
        isTopOfTheWeek: true,
        image: require ('../database/images/Burger/5.jpg'),
      },
      {
        
        name: 'Tower Burger',
        rating: '4.0',
        price: 400,
        isTopOfTheWeek: true,
        image: require ('../database/images/Burger/6.jpg'),
      },
    ],
  },
  {
    name: 'Pizza',
    image: require ('../database/images/pizza.png'),
    items: [
      {
        
        name: 'Chicken Tikka',
        rating: '5.0',
        price: 400,
        isTopOfTheWeek: true,
        image: require ('../database/images/Pizza/Pizza1.png'),
      },
      {
        
        name: 'Chicken Fajita',
        rating: '4.0',
        price: 350,
        isTopOfTheWeek: false,
        image: require ('../database/images/Pizza/Pizza3.png'),
      },
      {
        
        name: 'Pepperoni Pizza',
        rating: '4.0',
        price: 450,
        isTopOfTheWeek: true,
        image: require ('../database/images/Pizza/Pizza2.png'),
      },
      {
        
        name: 'Plain Cheese Pizza',
        rating: '5.5',
        price: 550,
        isTopOfTheWeek: true,
        image: require ('../database/images/Pizza/Pizza4.png'),
      },
      {
        
        name: 'Mexican Pizza',
        rating: '4.0',
        price: 450,
        isTopOfTheWeek: false,
        image: require ('../database/images/Pizza/Pizza5.png'),
      },
      {
        
        name: 'Peri Peri',
        rating: '4.0',
        price: 400,
        isTopOfTheWeek: true,
        image: require ('../database/images/Pizza/Pizza6.png'),
      },
    ],
  },
  {
    name: 'Soft Drinks',
    image: require ('../database/images/softdrinks.png'),
    items: [
      {
        
        rating: '5.0',
        price: 400,
        isTopOfTheWeek: true,
        image: require ('../database/images/Drinks/Coke.png'),
      },
      {
        
        name: 'Big Blue',
        rating: '4.0',
        price: 350,
        isTopOfTheWeek: false,
        image: require ('../database/images/Drinks/bigblue.png'),
      },
      {
        
        name: 'Fanta',
        rating: '4.0',
        price: 450,
        isTopOfTheWeek: true,
        image: require ('../database/images/Drinks/fanta.png'),
      },
      {
        
        name: 'Sprite',
        rating: '5.5',
        price: 550,
        isTopOfTheWeek: true,
        image: require ('../database/images/Drinks/sprite.png'),
      },
      {
        
        name: 'Water',
        rating: '4.0',
        price: 450,
        isTopOfTheWeek: false,
        image: require ('../database/images/Drinks/water.png'),
      },
      {
        
        name: 'Fanta PinaColada',
        rating: '4.0',
        price: 400,
        isTopOfTheWeek: true,
        image: require ('../database/images/Drinks/Fantapinacolada.png'),
      },
    ],
},
    {
    name: 'Kebab',
    image: require ('../database/images/kebab.png'),
    items: [
      {
        
        name: 'Chicken Seekh Kebab',
        rating: '5.0',
        price: 1400,
        isTopOfTheWeek: true,
        image: require ('../database/images/Kebab/1.jpeg'),
      },
      {
        
        name: 'Mexico Tikka Seekh',
        rating: '4.0',
        price: 1350,
        isTopOfTheWeek: false,
        image: require ('../database/images/Kebab/2.jpeg'),
      },
      {
        
        name: 'Beef Chapli Kebab',
        rating: '4.0',
        price: 1450,
        isTopOfTheWeek: true,
        image: require ('../database/images/Kebab/3.jpeg'),
        
      },
      {
        
        name: 'Chicken Reshmi Kebab',
        rating: '5.5',
        price: 950,
        isTopOfTheWeek: true,
        image: require ('../database/images/Kebab/4.jpeg'),

      },
      {
        
        name: 'Chicken Cutlets',
        rating: '4.0',
        price: 750,
        isTopOfTheWeek: false,
        image: require ('../database/images/Kebab/5.jpeg'),
        
      },
      {
        
        name: 'Malai Boti',
        rating: '4.0',
        price: 900,
        isTopOfTheWeek: true,
        image: require ('../database/images/Kebab/6.jpeg'),

      },
    ],
    },

     {
    name: 'Desserts',
    image: require ('../database/images/dessert.png'),
    items: [
      {
        
        name: 'Chocolate Donut',
        rating: '5.0',
        price: 400,
        isTopOfTheWeek: true,
        image: require ('../database/images/Desserts/1.jpeg'),
      },
      {
        
        name: 'Chocolate Mousse',
        rating: '4.0',
        price: 350,
        isTopOfTheWeek: false,
        image: require ('../database/images/Desserts/2.jpeg'),
      },
      {
        
        name: 'Oreo Ice-cream',
        rating: '4.0',
        price: 450,
        isTopOfTheWeek: true,
        image: require ('../database/images/Desserts/3.jpeg'),
        
      },
      {
        
        name: 'Custard Trifle',
        rating: '5.5',
        price: 850,
        isTopOfTheWeek: true,
        image: require ('../database/images/Desserts/4.jpeg'),

      },
      {
        
        name: 'Caramel Ice-cream',
        rating: '4.0',
        price: 750,
        isTopOfTheWeek: false,
        image: require ('../database/images/Desserts/5.jpeg'),
        
      },
      {
        
        name: 'Mini Cheese Cake',
        rating: '4.0',
        price: 300,
        isTopOfTheWeek: true,
        image: require ('../database/images/Desserts/6.jpeg'),

      },
    ],
    },

];

export const Categories1 = [
  {
    
      name: 'Potato Cutlets',
        image: require ('../database/images/Kebab/5.jpeg'),
  },
   
      {
        
        name: 'Cheese Burger',
        image: require ('../database/images/Burger/3.jpg')
      },
  
  {
    
     name: 'Caramel-Topped Ice-cream',
        image: require ('../database/images/Desserts/5.jpeg'),
  },
       
      {
        
        name: 'Chicken Tikka',
        image: require ('../database/images/Pizza/Pizza1.png'),
       
      },
  
  { 
     name: 'Chicken Reshmi Kebab',
        image: require ('../database/images/Kebab/4.jpeg'),
    
      },
      
];

export const Categories2 = [
  {
    
     name: 'Big Blue',
        image: require ('../database/images/Drinks/bigblue.png')
   },
  {
    
     name: 'Mexican Pizza',
     image: require ('../database/images/Pizza/Pizza2.png'),
  },
  {
    
    name: 'Tower Burger',
        image: require ('../database/images/Burger/6.jpg'),
  },
  {
    
     name: 'Plain Cheese Pizza',
        image: require ('../database/images/Pizza/Pizza4.png'),
  },
  {
    
     name: 'Donut',
        image: require ('../database/images/Desserts/1.jpeg'),
      },
];

