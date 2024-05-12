export type MenuItem = {
    id: number;
    name: string;
    price: number;
};

//Herencia a MenuItem
export type OrderItem = MenuItem & {
    quantity: number;
};
