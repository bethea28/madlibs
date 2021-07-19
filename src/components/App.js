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
  <section className="App">
    {!showTextArea && (
      <section className="App_forms-container">
        <article>
          <Form
            handleBlur={(field, id, event) => {
              createSentenceThunk(field, id, event);
            }}
            handleInputChange={(field, id, event) => {
              setFieldData(field, id, event);
            }}
            fieldOrder={fieldOrder}
          />
        </article>
        <article>
          <Essay
            essayText={essayText}
            handleChangeTextAreaFlag={textAreaFlagChange}
          />
        </article>
      </section>
    )}

    {showTextArea && (
      <article className="App_textarea-component">
        <TextAreaComponent handleStartOver={startOver} essayText={essayText} />
      </article>
    )}
  </section>
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
