import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import MenuComponent from "./MenuComponent";
import DishdetailComponent from "./DishdetailComponent";
import { DISHES } from "./dish";

export default class MainComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null,
    };
    }
    onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
    }
    render() {
    return (
        <div>
        <Navbar dark color="primary">
            <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
        </Navbar>
        <MenuComponent
            dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishdetailComponent
            dish={
            this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDish
            )[0]
            }
        />
        </div>
    );
    }
}