'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Classes', 
      [
        {className: 'Barbarian', type: 'Martial', book: 'Core', createdAt: new Date(), updatedAt: new Date() },
        {className: 'Bard', type: 'Caster/Utility', book: 'Core', createdAt: new Date(), updatedAt: new Date() },
        {className: 'Cleric', type: 'Caster', book: 'Core', createdAt: new Date(), updatedAt: new Date() },
        {className: 'Druid', type: 'Caster', book: 'Core', createdAt: new Date(), updatedAt: new Date() },
        {className: 'Fighter', type: 'Martial', book: 'Core', createdAt: new Date(), updatedAt: new Date() },
        {className: 'Paladin', type: 'Martial/Caster', book: 'Core', createdAt: new Date(), updatedAt: new Date() },
        {className: 'Ranger', type: 'Martial/Caster', book: 'Core', createdAt: new Date(), updatedAt: new Date() },
        {className: 'Rogue', type: 'Utility', book: 'Core', createdAt: new Date(), updatedAt: new Date() },
        {className: 'Sorcerer', type: 'Caster', book: 'Core', createdAt: new Date(), updatedAt: new Date() },
        {className: 'Wizard', type: 'Martial', book: 'Core', createdAt: new Date(), updatedAt: new Date() }
      ], 
      {}
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Classes', null, {});
    
  }
};
