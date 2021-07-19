import React from 'react';
import PropTypes from 'prop-types';

require('./TextArea.scss');

const TextAreaComponent = ({ essayText, handleStartOver }) => (
  <section className="textarea-container">
    <h2>Your essay text</h2>

    {/* onChange required for eslint purposes */}
    <textarea onChange={() => ''} className="textarea-component" value={essayText} />
    <button
      className="textarea-container_startover_button "
      onClick={handleStartOver}
    >
      START OVER
    </button>
  </section>
);
TextAreaComponent.propTypes = {
  essayText: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
  handleStartOver: PropTypes.func.isRequired,
};

export default TextAreaComponent;
