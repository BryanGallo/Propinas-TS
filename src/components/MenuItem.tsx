import type { MenuItem } from "../types/index";

type MenuItemProps = {
    item: MenuItem;
};
export default function MenuItem({ item }: MenuItemProps) {
    return (
        <div>
            <p>{item.name}</p>
            <p className="font-bold">$ {item.price}</p>
        </div>
    );
}
