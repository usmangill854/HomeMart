
import NavBar from "./NavBar";
import Cart from "./Cart";
import DetailPage from "./DetailPage";

import MainPage from "./MainPage";
import {BrowserRouter as Router, Route} from "react-router-dom";

const Index = () => {
    return<>
    <NavBar />
        <Router>
            <Route exact path="/" component={MainPage} />

            <Route exact path="/detail" component={DetailPage} />
            <Route exact path="/cart" component=  {Cart} />

        </Router>


 {/*<Slider/>*/}


        {/*<Cart />*/}
    </>
}
export default Index;