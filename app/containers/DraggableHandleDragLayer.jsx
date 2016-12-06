const {DragLayer} = require('react-dnd');

const {TYPES} = require('../constants/dnd');

const DragHandle = require('../components/DragHandle');

module.exports = DragLayer(TYPES.CROP, {
  beginDrag({x, y}) {
    return {x, y};
  },
}, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
}))(DragHandle);
