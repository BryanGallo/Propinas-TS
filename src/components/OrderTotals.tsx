import { useMemo } from "react";
import type { OrderItem } from "../types/index";
import { formatCurrency } from "../helpers/index";

type OrderItemProp = {
    order: OrderItem[];
    tip: number;
};

export default function OrderTotals({ order, tip }: OrderItemProp) {
    const subTotal = useMemo(
        () =>
            order.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            ),
        [order]
    );

    const tipAmount = useMemo(() => subTotal * tip, [tip, order]);

    const total = useMemo(() => subTotal + tipAmount, [tip, order]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales + Propina:</h2>
                <p>
                    Subtotal a pagar:{" "}
                    <span className="font-bold">
                        {formatCurrency(subTotal)}
                    </span>
                </p>
                <p>
                    Propina:{" "}
                    <span className="font-bold">
                        {formatCurrency(tipAmount)}
                    </span>
                </p>
                <p>
                    Total a pagar:{" "}
                    <span className="font-bold">{formatCurrency(total)}</span>
                </p>
            </div>
            <button></button>
        </>
    );
}
