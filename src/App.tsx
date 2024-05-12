import Header from "./components/Header";
import Menu from "./components/Menu";
import { menuItems } from "./data/db";
function App() {
    return (
        <>
            <Header />
            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div>
                    <h2 className="text-4xl font-bold text-center ">Menu</h2>
                    <div className="space-y-2 mt-5">
                        {menuItems &&
                            menuItems.map((item) => (
                                <Menu key={item.id} item={item} />
                            ))}
                    </div>
                </div>
                <div>
                    <h2 className="">Consumo</h2>
                </div>
            </main>
        </>
    );
}

export default App;
