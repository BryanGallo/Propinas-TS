import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
function App() {
    return (
        <>
            <Header />
            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div>
                    <h2 className="">Menu</h2>
                    {menuItems &&
                        menuItems.map((item) => (
                            <MenuItem key={item.id} item={item} />
                        ))}
                </div>
                <div>
                    <h2 className="">Consumo</h2>
                </div>
            </main>
        </>
    );
}

export default App;
