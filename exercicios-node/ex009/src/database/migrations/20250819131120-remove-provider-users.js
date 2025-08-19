export default {
  async up(queryInterface) {
    return queryInterface.removeColumn("users", "provider");
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.addColumn("users", "provider", {
      type: Sequelize.BOOLEAN,
      default: false,
      allowNull: false,
    });
  },
};
