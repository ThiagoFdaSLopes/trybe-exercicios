'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('books', 
    [
      { title: 'O Homem da Floresta', author_id: 1, genre_id: 5 },
      { title: 'A Floresta Maldita', author_id: 2, genre_id: 1 },
      { title: 'O Espaco Perdido', author_id: 3, genre_id: 2 },
      { title: 'O Donzela', author_id: 4, genre_id: 3 },
      { title: 'O Amanha', author_id: 5, genre_id: 4 },
    ],
    {},
   );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('books', null, {});
  }
};
