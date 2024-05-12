import type { MenuItem } from "../types/index";

type MenuItemProps = {
    item: MenuItem;
    addItem: (item: MenuItem) => void;
};
export default function Menu({ item, addItem }: MenuItemProps) {
    return (
        <button
            className="flex justify-between w-full p-4 rounded-lg border-2 border-teal-400 hover:bg-green-300"
            onClick={() => {
                addItem(item);
            }}
        >
            <p>{item.name}</p>
            <p className="font-bold">$ {item.price}</p>
        </button>
    );
}
