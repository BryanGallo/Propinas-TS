import { useState } from "react";
import { MenuItem, OrderItem } from "../types/index";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    function addItem(item: MenuItem) {
        const itemExist = order.find((orderItem) => orderItem.id === item.id);
        if (itemExist) {
            const updateOrder = order.map((orderItem) =>
                orderItem.id === item.id
                    ? { ...orderItem, quantity: orderItem.quantity + 1 }
                    : orderItem
            );
            setOrder(updateOrder);
        } else {
            const newItem: OrderItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        }
    }

    const removeItem = (id: MenuItem["id"]) => {
        const updateOrder = order.filter((item) => item.id !== id);
        setOrder(updateOrder);
    };
    const placeOrder = () => {
        setOrder(<OrderItem[]>[]);
        setTip(0);
    };
    return { addItem, order, removeItem, tip, setTip, placeOrder };
}
