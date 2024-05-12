import { useState } from "react";
import { OrderItem } from "../types/index";

export default function useCart() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    return {};
}
