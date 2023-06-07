import { useState, useEffect } from "react";
import MenuProducts_xx from "../../components/MenuProducts_xx";

const base_url = `http://localhost:5001/api/node_menu_26`;

let url = `${base_url}`;

const MenuNodePage_xx = () => {
  const [products, setProducts] = useState([]);

  const changeFilter = (filter) => {
    if(filter === 'all'){
        url = `${base_url}`;
    }else{
        url = `${base_url}&category=eq.${filter}`;
    }
    getMenuData_xx(filter);
    }

  const getMenuData_xx = async (filter = 'all') => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`${filter} data`, data);
    setProducts(data);
}

  useEffect(()=> {
    getMenuData_xx();
  }, []);

  return (
    <section>
        <div className="btn-container"></div>
        <div className="section-center">
            <section className="menu">
                <div className="title">
                  <h2>Menu from Node Server</h2>
                    <h3>Huang Wei Yi, 210410626</h3>
                    <div className="underline"></div>
                </div>
                <div className="btn-container">
                    <button type="button" className="filter-btn" data-id="all" onClick={() => { changeFilter('all'); }}>all</button><button type="button" className="filter-btn"
                        data-id="breakfast" onClick={() => { changeFilter('breakfast'); }}>
                        breakfast</button><button type="button" className="filter-btn" data-id="lunch" onClick={() => { changeFilter('lunch'); }}>
                        lunch</button><button type="button" className="filter-btn" data-id="dessert" onClick={() => { changeFilter('dessert'); }}>
                        dessert</button><button type="button" className="filter-btn" data-id="shakes" onClick={() => { changeFilter('shakes'); }}>
                        shakes
                    </button>
                </div>
              <MenuProducts_xx products={products}/>
            </section>
        </div>
    </section>
);
}

export default MenuNodePage_xx;