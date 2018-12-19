import React , { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './Constants';


const deviceTarget = {
    canDrop(props) {
        // console.log("item can be dropped here", props)
        return {}
    },

    drop(props, monitor) {
        const item = monitor.getItem();
        console.log(item.id);

        props.fireChange(item.id)

        return item; 
    }
};
/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

class Device extends Component {
  render() {

    // These props are injected by React DnD,
    // as defined by your `collect` function above:
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div style={{ height: '100%', width: '100%' }}>
        {this.props.children}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.ITEM, deviceTarget, collect)(Device);