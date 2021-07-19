import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Essay from './Essay';
import TextAreaComponent from './TextArea';

require('./App.scss');

const App = ({
  fieldOrder,
  setFieldData,
  createSentenceThunk,
  essayText,
  textAreaFlagChange,
  showTextArea,
  startOver,
}) => (
  <div className="App">
    {!showTextArea && (
      <section className="App_forms-container">
        <div>
          <Form
            handleBlur={(field, id, event) => {
              createSentenceThunk(field, id, event);
            }}
            handleInputChange={(field, id, event) => {
              setFieldData(field, id, event);
            }}
            fieldOrder={fieldOrder}
          />
        </div>
        <div>
          <Essay
            essayText={essayText}
            handleChangeTextAreaFlag={textAreaFlagChange}
          />
        </div>
      </section>
    )}

    {showTextArea && (
      <section className="App_textarea-component">
        <TextAreaComponent handleStartOver={startOver} essayText={essayText} />
      </section>
    )}
  </div>
);

App.propTypes = {
  fieldOrder: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
  setFieldData: PropTypes.func.isRequired,
  createSentenceThunk: PropTypes.func.isRequired,
  startOver: PropTypes.func.isRequired,
  textAreaFlagChange: PropTypes.func.isRequired,
  showTextArea: PropTypes.bool.isRequired,
  essayText: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
};

export default App;
