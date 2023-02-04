import { Form } from "@remix-run/react";
import FilterIcon from "../icons/filter-icon";
import MagnifyingGlass from "../icons/magnifying-glass";

// TODO: Add throttling or debouncing for search input https://medium.com/nerd-for-tech/debouncing-throttling-in-javascript-d36ace200cea

export default function TransactionsHistoryFilters() {
  const selectOptionClassNames = "add-transaction-select-option capitalize";

  return (
    <Form method="post">
      <div className="search-input-container">
        <div className="search-magnifying-input-container">
          <MagnifyingGlass className="test" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <button className="clear-text-filter-btn capitalize">clear</button>
      </div>

      <div className="category-date-filter-container">
        <div className="category-date-filter">
          <FilterIcon />

          <div className="category-filter-selector-con">
            <span>category</span>
            <div className="categories-filter-options">
              <div>
                <input
                  type="checkbox"
                  id="study"
                  name="category"
                  value="testOne"
                />
                <label htmlFor="study">study</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="loan"
                  name="category"
                  value="testTwo"
                />
                <label htmlFor="loan">loan</label>
              </div>
            </div>
          </div>

          {/* <select
            name="category"
            id="transaction-category"
            className="category-select capitalize block"
            required
            multiple
          >
            <option value="" className="">
              select
            </option>
            <option value="salary" className="select-hidden-options">
              salary
            </option>
            <option value="loan" className={selectOptionClassNames}>
              loan
            </option>
            <option value="gift" className={selectOptionClassNames}>
              gift
            </option>
            <option value="tech" className={selectOptionClassNames}>
              tech
            </option>
            <option value="food" className={selectOptionClassNames}>
              food
            </option>
            <option value="bills" className={selectOptionClassNames}>
              bills
            </option>
            <option value="sports" className={selectOptionClassNames}>
              sports
            </option>
            <option value="health" className={selectOptionClassNames}>
              health
            </option>
            <option value="clothes" className={selectOptionClassNames}>
              clothes
            </option>
          </select> */}

          <input type="date" />
          <input type="date" />

          <input type="submit" name="" id="" />
        </div>

        <button>clear</button>
      </div>
    </Form>
  );
}
