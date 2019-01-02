import React, { Component } from 'react';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props, monitor) {
    const item = { id: props.id };
    return item;
  },
  endDrag(props, monitor) {
    console.log("Item not being dragged anymore!", monitor.didDrop());
    console.log("itemSource ID:" + monitor.getItem().id )

    // props.fireChange(monitor.getItem().id)

    // When dropped on a compatible target, do something.
    // Read the original dragged item from getItem():
    // const item = monitor.getItem();
    // console.log("monitor.getItem: " + JSON.stringify(item) );

    // You may also read the drop result from the drop target
    // that handled the drop, if it returned an object from
    // its drop() method.
    // const dropResult = monitor.getDropResult();
    // console.log("monitor.getDropResult: " + JSON.stringify(dropResult) );

    
  },
  
  canDrag(props, monitor) {
    if(props.parentContainer === "components" ) {
      return true
    }

  }

};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    itemType: monitor.getItemType()

  }
}

class Item extends Component {
  render() {
    const { isDragging, connectDragSource } = this.props;


    return (
      connectDragSource(
        <div style={{
          // width: '80%',
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move',
          display: 'inline-block',
          paddingTop: 3,
          paddingRight: 6,
          paddingBottom: 3,
          paddingLeft: 6,
          marginTop: 4,
          marginRight: 4,
          backgroundColor: '#D8E4FF',

          
        }}>
          { this.props.text } with ID: { this.props.id }

          { this.props.parentContainer === 'device' ? <button onClick={ () => this.props.delete( this.props.id ) }>x</button> : null }

          {/* {isDragging && ' (and I am being dragged now)'} */}
        </div>
      )

    )
    
  }
}

export default DragSource(ItemTypes.ITEM, itemSource, collect)(Item);