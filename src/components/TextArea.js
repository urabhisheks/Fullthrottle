import React from "react";
import classes from "./TextArea.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function TextArea({
  labels,
  last,
  onChange,
  onClick,
  selected,
  complete,
  filled,
}) {
  function handleBlur(e) {
    const { name, value } = e.target;
    if (value.length) {
      complete(name);
    }
  }
  return (
    <>
      {labels.map((label, index) => {
        const isSelected = selected === label.toLowerCase().replace(/ +/g, "");
        const isFilled = filled.indexOf(label) !== -1 ? true : false;
        return (
          <div key={label}>
            <div className={classes.row}>
              {isFilled ? (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className={classes["circle-checked"]}
                />
              ) : (
                <div
                  className={
                    isSelected
                      ? `${classes.circle} ${classes["circle-selected"]}`
                      : `${classes.circle}`
                  }
                />
              )}

              <div
                className={
                  isSelected
                    ? `${classes.label} ${classes.selected}`
                    : `${classes.label}`
                }
              >
                {label}{" "}
              </div>
            </div>
            <div className={classes.row}>
              <div
                className={
                  index !== last - 1
                    ? isFilled
                      ? `${classes.bar} ${classes["bar-selected"]}`
                      : `${classes.bar}`
                    : `${classes.bar} ${classes["display-none"]}`
                }
              />
              <div>
                <textarea
                  className={classes.text}
                  name={label}
                  rows={1}
                  onChange={onChange}
                  onClick={onClick}
                  onBlur={handleBlur}
                  onFocus={onClick}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
