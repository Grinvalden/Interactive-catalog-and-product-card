import React from 'react';

interface Option {
    id: string;
    name: string;
}

interface OptionSelectorProps {
    options: Option[];
    selectedOptionId: string | null;
    onSelect: (id: string) => void;
}

const OptionSelector: React.FC<OptionSelectorProps> = React.memo(({ options, selectedOptionId, onSelect }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {options.map((option) => (
                <button
                    key={option.id}
                    onClick={() => onSelect(option.id)}
                    style={{
                        padding: '10px 20px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        backgroundColor: option.id === selectedOptionId ? '#007BFF' : '#fff',
                        color: option.id === selectedOptionId ? '#fff' : '#000',
                        cursor: 'pointer',
                    }}
                >
                    {option.name}
                </button>
            ))}
        </div>
    );
});

export default OptionSelector;