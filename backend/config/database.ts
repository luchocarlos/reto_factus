export default () => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: process.env.DATABASE_FILENAME || ':memory:',
    },
    useNullAsDefault: true,
  },
});