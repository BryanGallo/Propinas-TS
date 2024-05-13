import { OrderItem } from "../types/index";

type OrderItemProps = {
    order: OrderItem[];
};

export default function OrderContents({ order }: OrderItemProps) {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center ">Consumo</h2>
            {order.length === 0 ? (
                <p>La Orden esta vacía</p>
            ) : (
                order.map((item: OrderItem) => (
                    <div key={item.id}>
                        <p>{item.name} - $ {item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
}
