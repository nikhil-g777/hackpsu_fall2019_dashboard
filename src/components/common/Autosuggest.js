import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, list) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;  
    return inputLength === 0 ? [] : list.filter(input =>
      input.name.toLowerCase().slice(0, inputLength) === inputValue
    // input.name.indexOf(inputValue) >= 0
    );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    <strong>{suggestion.name}</strong>
  </div>
);

class AutosuggestComponent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            value: '',
            suggestions: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
        this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);

    }

    onChange (event, selectedValue) {
        return this.setState({
          value: selectedValue.newValue
        });
      }
    
      // Autosuggest will call this function every time you need to update suggestions.
      // You already implemented this logic above, so just use it.
      onSuggestionsFetchRequested ({ value }) {
        return this.setState({
          suggestions: getSuggestions(value, this.props.list)
        });
      }
    
      // Autosuggest will call this function every time you need to clear suggestions.
      onSuggestionsClearRequested ()  {
        return this.setState({
          suggestions: []
        });
      }

      render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: this.props.placeholder,
            value,
            onChange: this.onChange
          };

          return (
            <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
        />
          );
      }
}

AutosuggestComponent.propTypes = {
    list: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default AutosuggestComponent;