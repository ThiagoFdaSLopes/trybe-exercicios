const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const calculateTotal = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.length;
};

const searchChocolate = async (name) => {
  const cacauTrybe = await readCacauTrybeFile();
  const found = cacauTrybe.chocolates.filter((e) => e.name.includes(name));
  return found;
};

const writeFile = async (id, name, brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolate = cacauTrybe.chocolates.find((e) => e.id === Number(id));

  chocolate.name = name;
  chocolate.brandId = brandId;

  await fs.writeFile('./cacauTrybeFile.json', JSON.stringify(cacauTrybe, null, 2));
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  calculateTotal,
  searchChocolate,
  writeFile,
};