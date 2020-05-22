import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SwitchButton  from '../SwitchButton'

test('SwitchButton should turns on when clicks', () => {
    const { getByText } = render(<SwitchButton />)
    const btn = getByText('TURN ON')

    fireEvent.click(btn)
    // console.log(btn);

    expect(btn.textContent).toBe('TURN OFF')
    
  })

  test('SwitchButton should turns on when pass isOn', () => {
    const { getByText, debug } = render(<SwitchButton isOn />)
    const btn = getByText('TURN OFF')

    fireEvent.click(btn)
    // console.log(btn);

    expect(btn.textContent).toBe('TURN ON')
    
  })
  
