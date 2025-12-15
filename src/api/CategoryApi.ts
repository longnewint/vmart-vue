export const CategoryApi = {
  getCategories() {
    return [
      {
        label: 'Produce & Protein',
        items: [
          [
            {
              items: [{ label: 'Vegetables', id: 9 },
                { label: 'Fruits', id: 10 },
                { label: 'Plant Protein & Tofu', id: 2 }]
            }
          ]
        ]
      },
      {
        label: 'Bakery',
        items: [
          [
            {
              items: [{ label: 'Bread', id: 14 },
                { label: 'Buns & Rolls', id: 15 },
                { label: 'Tortillas & Flat Breads', id: 16 },
                { label: 'Cake', id: 17 }]
            }
          ]
        ]
      },
      {
        label: 'Pantry',
        items: [
          [
            {
              items: [{ label: 'Bread', id: 14 },
                { label: 'Buns & Rolls', id: 15 },
                { label: 'Tortillas & Flat Breads', id: 16 },
                { label: 'Cake', id: 17 }]
            }
          ]
        ]
      },
      {
        label: 'Frozen Food',
        id: 4
      },
      {
        label: 'Milk & Drinks',
        id: 4
      },
      {
        label: 'Snacks, Chips & Candy',
        id: 8
      }
    ];
  }
}