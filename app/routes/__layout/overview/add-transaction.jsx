import { redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { useRef, useState } from "react";
import CloseIcon from "~/components/icons/close-icon";
import { createTransaction } from "~/models/transactions.server";

// TODO VALIDATION, if type of transaction is expense, make sure that the account won't have a negative value after that.

export const action = async ({ request }) => {
  const formData = await request.formData(),
    category = formData.get("category").toUpperCase(),
    date = formData.get("date"),
    amount = Number(formData.get("amount")),
    type = formData.get("type").toUpperCase(),
    note = formData.get("note"),
    createdAt = new Date(date).toISOString();

  await createTransaction({ category, createdAt, amount, type, note });

  return redirect("/overview");
};

export default function AddTransaction() {
  const [isTypeIncome, setIsTypeIncome] = useState("income");
  const selectType = useRef(null);

  const selectOptionStyles = "add-transaction-select-option capitalize";

  const todayDate = new Date().toLocaleDateString("en-GB");
  const initialDateValue = todayDate.split("/").reverse().join("-");

  const handleOnTypeChange = () => {
    selectType.current.value = "";
    setIsTypeIncome(!isTypeIncome);
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="add-transaction-popup">
        <div className="add-transaction-top flex-space-between ">
          <span className="capitalize">add transaction</span>
          <CloseIcon />
        </div>
        <Form method="post" className="add-transaction-form">
          <div className="category-date-amount-container flex-space-between">
            <div>
              <label
                htmlFor="transaction-category"
                className="input-label capitalize block"
              >
                category
              </label>
              <select
                ref={selectType}
                name="category"
                id="transaction-category"
                className="category-select capitalize"
                required
              >
                <option value="" className={selectOptionStyles}>
                  select
                </option>
                {isTypeIncome ? (
                  <>
                    <option value="salary" className={selectOptionStyles}>
                      salary
                    </option>
                    <option value="loan" className={selectOptionStyles}>
                      loan
                    </option>
                    <option value="gift" className={selectOptionStyles}>
                      gift
                    </option>
                  </>
                ) : (
                  <>
                    <option value="tech" className={selectOptionStyles}>
                      tech
                    </option>
                    <option value="food" className={selectOptionStyles}>
                      food
                    </option>
                    <option value="bills" className={selectOptionStyles}>
                      bills
                    </option>
                    <option value="sports" className={selectOptionStyles}>
                      sports
                    </option>
                    <option value="health" className={selectOptionStyles}>
                      health
                    </option>
                    <option value="clothes" className={selectOptionStyles}>
                      clothes
                    </option>
                  </>
                )}
              </select>
            </div>
            <div>
              <label
                htmlFor="transaction-date"
                className="input-label capitalize block"
              >
                date
              </label>
              <input
                type="date"
                name="date"
                id="transaction-date"
                className="add-transaction-date"
                defaultValue={initialDateValue}
                required
              />
            </div>
            <div className="add-transaction-amount-container">
              <span
                dangerouslySetInnerHTML={{ __html: "&dollar;" }}
                className="add-transaction-amount-sign"
              ></span>
              <label
                htmlFor="transaction-amount"
                className="input-label capitalize block"
              >
                amount
              </label>
              <input
                type="number"
                name="amount"
                id="transaction-amount"
                min="0"
                className="add-transaction-amount"
                required
              />
            </div>
          </div>
          <div className="type-note-container flex-space-between">
            <div>
              <span className="add-transaction-type-title capitalize block">
                type
              </span>
              <input
                type="radio"
                id="add-transaction-type-income"
                name="type"
                value="income"
                defaultChecked
                className="cursor-pointer"
                required
                onChange={() => handleOnTypeChange()}
              />
              <label
                htmlFor="add-transaction-type-income"
                className="type-input-label input-label capitalize cursor-pointer"
              >
                income
              </label>

              <input
                type="radio"
                id="add-transaction-type-expense"
                name="type"
                value="expense"
                className="cursor-pointer"
                required
                onChange={() => handleOnTypeChange()}
              />
              <label
                htmlFor="add-transaction-type-expense"
                className="type-input-label input-label capitalize cursor-pointer"
              >
                expense
              </label>
            </div>

            <div>
              <label
                htmlFor="transaction-note"
                className="input-label capitalize block"
              >
                note
              </label>
              <textarea
                className="add-transaction-note-textarea"
                name="note"
                id="transaction-note"
                maxLength="350"
                required
              ></textarea>
            </div>
          </div>
          <div className="dismiss-add-transaction-container">
            <Link
              to="/overview"
              className="add-transaction-dismiss-btn capitalize"
            >
              dismiss
            </Link>
            <button
              type="submit"
              className="add-transaction-submit-btn capitalize"
            >
              add transaction
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}
