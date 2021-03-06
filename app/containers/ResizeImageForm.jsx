const {connect} = require('react-redux');

const {
  resizeImage,
} = require('../actions/ImageActions');

const {
  closeWindow,
  sendModalResponse,
} = require('../actions/WindowActions');

const ResizeImageForm = require('../components/ResizeImageForm');

const mapStateToProps = (state, {width, height}) => ({
  initialWidth: Number(width),
  initialHeight: Number(height),
});

const mapDispatchToProps = (dispatch) => ({
  onCancel() {
    dispatch(closeWindow());
  },

  onSubmit(width, height) {
    dispatch(sendModalResponse(resizeImage(width, height)));
    dispatch(closeWindow());
  },
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResizeImageForm);
