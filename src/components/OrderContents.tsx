import { MenuItem, OrderItem } from "../types/index";
import { formatCurrency } from "../helpers/index";

type OrderItemProps = {
    order: OrderItem[];
    removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContents({ order, removeItem }: OrderItemProps) {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center ">Consumo</h2>
            {order.length === 0 ? (
                <p className="text-center font-bold mt-10 text-orange-400 text-xl">La Orden esta vacía</p>
            ) : (
                order.map((item: OrderItem) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-t border-t-gray-200 py-5 last-of-type:border-b mt-5"
                    >
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} -{" "}
                                {formatCurrency(item.quantity * item.price)}
                            </p>
                        </div>
                        <button
                            className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                            onClick={() => {
                                removeItem(item.id);
                            }}
                        >
                            X
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}
