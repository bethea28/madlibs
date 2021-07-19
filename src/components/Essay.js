import React from 'react';
import PropTypes from 'prop-types';
import { FIELD_NAMES } from '../constants';

require('./Essay.scss');

const Essay = ({
  essayText,
  handleChangeTextAreaFlag,
}) => (
  <>
    <section className="essay">
      <div>
        <h2>Essay</h2>
        {essayText.length > 0
          && essayText.map((sentence) => <b key={`${sentence}_fields`}>{sentence}</b>)}
      </div>

      {/* tells the edit button to show when all fields are populated and none contain
       empty strings */}
      {essayText.length >= Object.keys(FIELD_NAMES).length
          && essayText.indexOf('') < 0 && (
            <button className="essay_edit-button" onClick={handleChangeTextAreaFlag}>
              <h3>EDIT</h3>
            </button>
      )}
    </section>
  </>
);
Essay.propTypes = {
  essayText: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
    .isRequired,
  handleChangeTextAreaFlag: PropTypes.func.isRequired,
};

export default Essay;
