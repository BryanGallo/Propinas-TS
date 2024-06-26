import Header from "./components/Header";
import Menu from "./components/Menu";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hook/useOrder";
function App() {
    const { addItem, order, removeItem, tip, setTip, placeOrder } = useOrder();
    return (
        <>
            <Header />
            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div className="p-5">
                    <h2 className="text-4xl font-bold text-center ">Menu</h2>
                    <div className="space-y-2 mt-5">
                        {menuItems &&
                            menuItems.map((item) => (
                                <Menu
                                    key={item.id}
                                    item={item}
                                    addItem={addItem}
                                />
                            ))}
                    </div>
                </div>
                <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-2">
                    <OrderContents order={order} removeItem={removeItem} />
                    {order.length > 0 ? (
                        <>
                            <TipPercentageForm setTip={setTip} tip={tip} />
                            <OrderTotals
                                order={order}
                                tip={tip}
                                placeOrder={placeOrder}
                            />
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </main>
        </>
    );
}

export default App;
