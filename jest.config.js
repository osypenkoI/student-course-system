module.exports = {
  reporters: [
    'default',
    [
      './node_modules/@testomatio/reporter/lib/adapter/jest.js',
      { apiKey: process.env.TESTOMATIO },
    ],
  ],
  testMatch: ['<rootDir>/tests/unit/**/*.test.js'], // Виконувати тільки тести з папки unit
};

