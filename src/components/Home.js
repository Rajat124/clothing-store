import React from "react";
import ListItem from "./ListItem";
import Userdash from "./userdash";

const Home = (props) => {
  return (
    <div>
      {<Userdash onSaveData={props.onSaveData} />}
      {props.itemlist.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Home;
