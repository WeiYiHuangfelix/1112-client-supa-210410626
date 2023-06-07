import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

const MenuByCategoryPage_xx = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const params = useParams();
  console.log('params category', params.category);

  const navigate = useNavigate();

  const changeFilter = (category) => {
      console.log('category', category);
      setCategory(category);
  }

  const getMenuDataByCategory_xx = async () => {

      if(params.category === 'all'){
          url = `${base_url}`;
      }else{
          url = `${base_url}&category=eq.${params.category}`;
      }
      const response = await fetch(url, options);
      const data = await response.json();
      console.log('menu data ', data);
      setProducts(data);
      
  }


  useEffect(() => {
      getMenuDataByCategory_xx();
  }, [category]);

  return (
  <section>
    <div className="btn-container"></div>
    <div className="section-center">
      <section className="menu">
        <div className="title">
          <h2>Menu from Supabase menu table</h2>
          <h3>Huang Wei Yi 210410626</h3>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button type="button" className="filter-btn" data-id="all" onClick={() => {
             changeFilter('all');
             return navigate(`/supa_menu_xx/all`); 
             }}>all</button>
          <button type="button" className="filter-btn" data-id="breakfast" onClick={()=>{
             changeFilter('breakfast');
              navigate(`/supa_menu_xx/breakfast`);
              }}>breakfast</button>
            <button type="button" className="filter-btn" data-id="lunch" onClick={() => {
               changeFilter('lunch');
               return navigate(`/supa_menu_xx/lunch`);
                }}>lunch</button>
            <button type="button" className="filter-btn" data-id="dessert" onClick={() => {
               changeFilter('dessert');
                return navigate(`/supa_menu_xx/dessert`);
                }}>dessert</button>
            <button type="button" className="filter-btn" data-id="shakes" onClick={() => {
               changeFilter('shakes');
              return navigate(`/supa_menu_xx/shakes`);
              }}>shakes</button>
        </div>
      <MenuProducts_xx products={products}/>
      </section>
    </div>
  </section>
  );
}

export default MenuByCategoryPage_xx;