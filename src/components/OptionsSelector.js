import React from 'react';

const OptionsSelector = ({ selectedOptions, onSelect }) => {
  const toneOptions = ['Informative', 'Casual', 'Professional', 'Humorous', 'Inspirational'];
  const lengthOptions = ['Short', 'Medium', 'Long'];
  const styleOptions = ['Narrative', 'Listicle', 'Q&A', 'Review', 'How-to'];

  return (
    <div>
      <h3>Select Options</h3>
      <label>
        Tone:
        <select value={selectedOptions.tone} onChange={(e) => onSelect({ ...selectedOptions, tone: e.target.value })}>
          <option value="">Select</option>
          {toneOptions.map((tone, index) => (
            <option key={index} value={tone}>
              {tone}
            </option>
          ))}
        </select>
      </label>
      <label>
        Length:
        <select value={selectedOptions.length} onChange={(e) => onSelect({ ...selectedOptions, length: e.target.value })}>
          <option value="">Select</option>
          {lengthOptions.map((length, index) => (
            <option key={index} value={length}>
              {length}
            </option>
          ))}
        </select>
      </label>
      <label>
        Style:
        <select value={selectedOptions.style} onChange={(e) => onSelect({ ...selectedOptions, style: e.target.value })}>
          <option value="">Select</option>
          {styleOptions.map((style, index) => (
            <option key={index} value={style}>
              {style}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default OptionsSelector;
