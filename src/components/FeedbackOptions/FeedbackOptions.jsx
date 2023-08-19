import React from 'react';
import { Button, Div, Item } from './FeedbackOption.js';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Div>
      {options.map(item => (
        <Item key={item}>
          <Button type="button" onClick={() => onLeaveFeedback(item)}>
            {item.toUpperCase()}
          </Button>
        </Item>
      ))}
    </Div>
  );
};
