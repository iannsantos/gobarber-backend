

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // tabela onde eu quero inserir as informações
      'avatar_id', // nome do campo a ser criado
      {
        type: Sequelize.INTEGER,
        // foreign key
        references: {
          model: 'files', // tabela
          key: 'id', // primary key da tabela acima
        },
        // quando o registro da tabela files for atualizado, o que vai acontecer
        // com o avatar_id na tabela users
        onUpdate: 'CASCADE', // altere também na tabela users
        // o mesmo acima, porém quando for deletado
        onDelete: 'SET NULL', // vai ser nullo
        allowNull: true,
      }
    );
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
