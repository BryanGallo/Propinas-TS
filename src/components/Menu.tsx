import type { MenuItem } from "../types/index";

type MenuItemProps = {
    item: MenuItem;
};
export default function Menu({ item }: MenuItemProps) {
    return (
        <div className="flex justify-between w-full p-4 rounded-lg border-2 border-teal-400 hover:bg-green-300">
            <p>{item.name}</p>
            <p className="font-bold">$ {item.price}</p>
        </div>
    );
}
