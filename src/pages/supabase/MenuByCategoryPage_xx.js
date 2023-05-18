import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MenuByCategoryPage_xx = () => {
  const [products, setProducts] = useState([]);

  const params = useParams();
  console.log('params category', params.category);

  const navigate = useNavigate;

  const changeFilter = (filter = '') => {
    //navigate(`/supa_menu_xx/${filter}`);
    window.location.href=`supa_menu_xx/${filter}`
  }

  const getMenuDataByCategory_xx = async() => {
    const respone  =await fetch(`https://boadkpezbkrextxfzgiw.supabase.co/rest/v1/menu_xx?select=*&category=eq.${params.category}`, {
      method: 'GET',
      headers: {
        apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvYWRrcGV6YmtyZXh0eGZ6Z2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY1MDcxMTAsImV4cCI6MTk5MjA4MzExMH0.IYJ6ByGzzD7PeLXvUyXt9EZhbWv808POGPedW9Rqgzo`,
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvYWRrcGV6YmtyZXh0eGZ6Z2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY1MDcxMTAsImV4cCI6MTk5MjA4MzExMH0.IYJ6ByGzzD7PeLXvUyXt9EZhbWv808POGPedW9Rqgzo`
      }
    });
    const data =await respone.json();
    console.log('menu ata', data);
    setProducts(data);
  }

  useEffect(()=> {
    getMenuDataByCategory_xx ();
  }, []);
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
          <button type="button" className="filter-btn" data-id="all">all</button>
          <button type="button" className="filter-btn" data-id="breakfast" onClick={()=>{
            navigator('/supa_menu_xx/breakfast');
          }}>breakfast</button>
            <button type="button" className="filter-btn" data-id="lunch">lunch</button>
            <button type="button" className="filter-btn" data-id="dessert">dessert</button>
            <button type="button" className="filter-btn" data-id="shakes">shakes</button>
        </div>
        <div className="section-center">
          { products.map((product) => {
            const {id, img, price, title, descrip} = product;
            return (
              <article className="menu-item" key= {id}>
              <img src={img} alt="eggs" className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p className="item-text">
               {descrip}
                </p>
              </div>
            </article>
            )
          })}
        </div>
      </section>
    </div>
  </section>
  );
}

export default MenuByCategoryPage_xx;