export class Flat {
  city: string;
  title: string;
  author: string;
  rooms: any;
  tags: string[];
  price: number;

  constructor(
    city: string,
    title: string,
    author: string,
    rooms: any,
    tags: string[],
    price: number,
  ) {
    this.city = city;
    this.title = title;
    this.author = author;
    this.rooms = rooms;
    this.tags = tags;
    this.price = price;
  }
}
