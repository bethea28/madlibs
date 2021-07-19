import React from 'react';
import PropTypes from 'prop-types';

require('./TextArea.scss');

const TextAreaComponent = ({ essayText, handleStartOver }) => (
  <div className="textarea-container">
    <h2>Your essay text</h2>
    <textarea onChange={() => {}} className="textarea-component" value={essayText} />
    <section>
      <button
        className="textarea-container_startover_button "
        onClick={handleStartOver}
      >
        START OVER
      </button>
    </section>
  </div>
);
TextAreaComponent.propTypes = {
  essayText: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
  handleStartOver: PropTypes.func.isRequired,
};

export default TextAreaComponent;