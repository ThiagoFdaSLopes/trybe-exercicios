import BookModel from "./model/Book";

const main = async () => {
  const bookModel = new BookModel();

  const result = await bookModel.getAll();

  console.log(result);
}

main();