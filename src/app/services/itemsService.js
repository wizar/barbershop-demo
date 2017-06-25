export default function () {
  const mockItems = [
    {
      id: 1,
      name: 'Baxter Road Kit',
      price: 50,
      manufacturer: 'Baxter of California',
      img: 'baxter-road-kit.jpg',
      imgLg: 'baxter-road-kit-large.jpg',
      description: 'When you have to jet but don’t have time to squeeze your favorite Baxter of California products into smaller bottles - don’t worry, we’ve got you. This handy on-the-go kit features 2 oz versions of all your favorite shaving products and men\'s skincare essentials, ready to meet your skin, hair and grooming needs wherever you need to go. It also makes a great gift.',
      details: 'Daily Face Wash;Oil Free Moisturizer;Super Close Shave Formula;After Shave Balm;'
    },
    {
      id: 2,
      name: 'Daily Moisturizing Conditioner',
      price: 20,
      manufacturer: 'Baxter of California',
      img: 'baxter-conditioner.jpg',
      imgLg: 'baxter-conditioner-large.jpg',
      description: 'Restores moisture as it helps rebuild the hair with protein-packed formula. Botanicals and vitamins promote hair manageability, counteract dryness and add natural shine--without weighing hair down. Use with our Daily Protein Shampoo.',
      details: ''
    },
    {
      id: 3,
      name: 'Hold Summer Pomade',
      price: 10,
      manufacturer: 'Suavecito',
      img: 'suavecito-pomade.jpg',
      imgLg: 'suavecito-pomade-large.jpg',
      description: 'The time has finally come for summer and it’s going to come at us in a big way. Our new Summer Pomade is the perfect compliment to the season and will help you to enjoy it just that much more. It has a fragrance that is perfect for the summer season and we created it that way. The scent is light and fresh tying in perfectly with everything that comes with this great time; the heat, the ice cream, sun tan lotion and the ladies. Put this one on and get out there to have some fun!',
      details: 'A perfect summer scent;Medium hold for most hair types;Washes out with just water needing no special shampoos'
    },
    {
      id: 4,
      name: 'American Crew Classic Pomade',
      price: 10,
      manufacturer: 'American Crew',
      img: 'american-crew-pomade.jpg',
      imgLg: 'american-crew-pomade-large.jpg',
      description: 'Extremely versatile water-based formula rinses clean and offers smooth control with shine. Works well for curly or straight hair and provides a modern, flexible alternative to styling gels. Provides tremendous shine and pliable hold. Ultimate hold in a pliable product.',
      details: ''
    },
    {
      id: 5,
      name: 'Firm Hold Styling Gel',
      price: 20,
      manufacturer: 'American Crew',
      img: 'american-crew-cream.jpg',
      imgLg: 'american-crew-cream-large.jpg',
      description: 'Firm Hold Styling Gel, the ultimate in holding power, is enriched with natural extracts like Vitamin B5 to help hair look thicker with added shine. This alcohol-free gel is superior in hold and shine and has a low pH to prevent drying of the scalp.',
      details: ''
    },
    {
      id: 6,
      name: 'Shave Starter Kit',
      price: 50,
      manufacturer: 'Baxter of California',
      img: 'baxter-shaving-kit.jpg',
      imgLg: 'baxter-shaving-kit-large.jpg',
      description: 'Designed to help you achieve a longer-lasting shave, this kit has all the basics for your shaving needs - no matter the stage in your shaving schedule. Start with Shave Tonic for a pre-shave treatment with a hot towel to soften hair (can also be used post-shave). Use Super Close Shave Formula for an effortless, smooth shave and finish with after Shave Balm to calm post-shave irritation and razor burn.',
      details: 'Shave Tonic 4 oz;Super Close Shave Formula 8 oz'
    }
  ];

  return {
    getItems() {
      return mockItems;
    },

    getItem(id) {
      return mockItems.find(item => item.id === id);
    },

    getManufacturers() {
      return [...(new Set(mockItems.map(item => item.manufacturer)))];
    }
  };
}
