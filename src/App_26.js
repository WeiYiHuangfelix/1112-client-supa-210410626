import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage_xx from "./pages/HomePage_xx";
import MenuStaticPage_xx from "./pages/local/menuStaticPage_xx";
import MenuLocalJsonPage_xx from "./pages/local/MenuLocalJsonPaeg_xx";

import MenuPage_xx from "./pages/supabase/MenuPaeg_xx";
import MenuByCategoryPage_xx from "./pages/supabase/MenuByCategoryPage_xx";
import MenuNodePage_xx from "./pages/node/MenuNodePaeg_xx";


const App_26 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage_xx />} />
        <Route path="/static_xx" element={<MenuStaticPage_xx />} />
        <Route path="/local_menu_xx" element={<MenuLocalJsonPage_xx />} />
        <Route path="/supa_menu_xx" element={<MenuPage_xx />} />
        <Route path="/supa_menu_xx/:category" element={<MenuByCategoryPage_xx />} />
        <Route path="/node_menu_xx" element={<MenuNodePage_xx />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_26;
