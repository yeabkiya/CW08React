import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "All" // Default value
    };
  }

  // Handle search input change
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  // Handle filter dropdown change
  onFilter = (type) => {
    this.setState({ type });
  }

  // Filter items by search and type
  filterItem = (item) => {
    const { search, type } = this.state;
    const matchesSearch = item.name.toLowerCase().includes(search);
    const matchesType = type === "All" || item.type === type;
    return matchesSearch && matchesType;
  }

  render() {
    return (
      <div className="filter-list">
        {/* Dropdown menu */}
        <DropdownButton title="Filter by Type" id="filter-dropdown" onSelect={this.onFilter}>
            <Dropdown.Item className="dropdown-item-custom" eventKey="All">All</Dropdown.Item>
            <Dropdown.Item className="dropdown-item-custom" eventKey="Fruit">Fruit</Dropdown.Item>
            <Dropdown.Item className="dropdown-item-custom" eventKey="Vegetable">Vegetable</Dropdown.Item>
        </DropdownButton>



        {/* Search bar */}
        <input type="text" placeholder="Search" onChange={this.onSearch} />

        {/* Filtered list */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
