import React, { useState } from "react";
import { Reorder } from "motion/react";
import styles from "./draggable_list.module.scss";

const DraggableList = () => {
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <div>
      <Reorder.Group axis="y" values={items} onReorder={setItems} className={styles.draggable_list}>
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            <div className={styles.draggable_card}>{item}</div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default DraggableList;
