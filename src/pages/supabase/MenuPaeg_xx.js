import { useState, useEffect } from "react";
import MenuProducts_xx from "../../components/MenuProducts_xx";

const base_url = `https://boadkpezbkrextxfzgiw.supabase.co/rest/v1/menu_xx?select=*`;

let url = `${base_url}`;

const options = {
    method: 'GET',
            headers: {
                apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvYWRrcGV6YmtyZXh0eGZ6Z2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY1MDcxMTAsImV4cCI6MTk5MjA4MzExMH0.IYJ6ByGzzD7PeLXvUyXt9EZhbWv808POGPedW9Rqgzo`,
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvYWRrcGV6YmtyZXh0eGZ6Z2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY1MDcxMTAsImV4cCI6MTk5MjA4MzExMH0.IYJ6ByGzzD7PeLXvUyXt9EZhbWv808POGPedW9Rqgzo`
            }
        
};


const MenuPage_xx = () => {
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
    const response = await fetch(url, options);
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
                    <h2>menu - Supabase, 210410626</h2>
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

export default MenuPage_xx;