import React, {useState,useEffect} from 'react'
import items from "./data"

const RoomContext = React.createContext();



const RoomProvider = ({ children }) => {
  const [state, setstate] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  });

  useEffect(() => {
  
      let rooms = FormatData(items);
      console.log(rooms);
      let featuredRooms = rooms.filter(room => room.featured == true);
      setstate({
        rooms,
        sortedRooms:rooms,
        featuredRooms,
        loading:false
      })
  
  }, []);

  const FormatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const getRoom = (slug) => {
    let tempRooms = [...state.rooms];
    let room =  tempRooms.find((room) => room.slug === slug)

  }

  return (
    <RoomContext.Provider value={{ ...state,getRoom:getRoom }}>{children}</RoomContext.Provider>
  );
};







const RoomConsumer  = RoomContext.Consumer;

export {RoomProvider,RoomConsumer,RoomContext} ;
