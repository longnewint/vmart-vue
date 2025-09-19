export const CategoryApi = {
  getCategories() {
    return [
      {
        label: 'Product & Protein',
        items: [
          [
            {
              items: [{ label: 'Accessories', id: 1 }, { label: 'Armchair', id: 2 }, { label: 'Coffee Table', id: 3 }]
            }
          ],
          [
            {
              label: 'Kitchen',
              items: [{ label: 'Bar stool', id: 4 }, { label: 'Chair', id: 5 }, { label: 'Table', id: 6 }]
            },
            {
              label: 'Bathroom',
              items: [{ label: 'Accessories', id: 7 }]
            }
          ]
        ]
      },
      {
        label: 'Bakery'
      },
      {
        label: 'Pantry'
      },
      {
        label: 'Frozen Food'
      },
      {
        label: 'Milk & Drinks'
      },
      {
        label: 'Snack'
      }
    ];
  }
}