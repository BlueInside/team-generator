import { render, screen, fireEvent } from '@testing-library/react';

import { describe, expect, test } from 'vitest';
import Main from '../components/main';
import userEvent from '@testing-library/user-event';

describe('Main Component', () => {
  test('renders all input fields and controls', () => {
    render(<Main />);

    // Check for "Number of teams" input
    const teamSizeInput = screen.getByLabelText(/number of teams:/i);
    expect(teamSizeInput).toBeInTheDocument();

    // Check for "Random Roles" select
    const randomRolesSelect = screen.getByLabelText(/random roles:/i);
    expect(randomRolesSelect).toBeInTheDocument();

    // Check for "Random Champions" select
    const randomChampionsSelect = screen.getByLabelText(/random champions:/i);
    expect(randomChampionsSelect).toBeInTheDocument();

    // Check for "Number of Players" slider
    const playerCountSlider = screen.getByLabelText(/number of players:/i);
    expect(playerCountSlider).toBeInTheDocument();
  });

  test('updates team size when the user changes the input', async () => {
    const user = userEvent.setup();
    render(<Main />);

    const teamSizeInput = screen.getByLabelText(/number of teams:/i);

    // Change team size to 2
    user.clear(teamSizeInput);
    await user.type(teamSizeInput, '2');
    expect(teamSizeInput.value).toBe('2');
  });

  test('updates random roles when the user selects an option', async () => {
    const user = userEvent.setup();

    render(<Main />);
    const randomRolesSelect = screen.getByLabelText(/random roles:/i);

    // Select "Yes" for random roles
    await user.selectOptions(randomRolesSelect, ['Yes']);
    expect(randomRolesSelect.value).toBe('true');

    // Select "No" for random roles
    await user.selectOptions(randomRolesSelect, ['No']);
    expect(randomRolesSelect.value).toBe('false');
  });

  test('updates random champions when the user selects an option', async () => {
    const user = userEvent.setup();
    render(<Main />);

    const randomChampionsSelect = screen.getByLabelText(/random champions:/i);

    // Select "Yes" for random champions
    await user.selectOptions(randomChampionsSelect, ['Yes']);
    expect(randomChampionsSelect.value).toBe('true');

    // Select "No" for random champions
    await user.selectOptions(randomChampionsSelect, ['No']);
    expect(randomChampionsSelect.value).toBe('false');
  });

  test('updates the number of players when the slider changes', async () => {
    render(<Main />);

    const playerCountSlider = screen.getByLabelText(/number of players:/i);

    // Change the slider value to 6
    fireEvent.change(playerCountSlider, { target: { value: '3' } });
    expect(playerCountSlider.value).toBe('3');
  });

  test('renders the correct number of player input fields based on player count', async () => {
    const user = userEvent.setup();
    render(<Main />);

    const teamSizeInput = screen.getByLabelText(/number of teams:/i);

    // Change team size to 2
    user.clear(teamSizeInput);
    await user.type(teamSizeInput, '2');

    const playerCountSlider = screen.getByLabelText(/number of players:/i);

    // Change player count to 6
    fireEvent.change(playerCountSlider, { target: { value: '6' } });

    // Expect 6 input fields for players
    const playerInputs = screen.getAllByPlaceholderText(/player \d+/i);
    expect(playerInputs.length).toBe(6);
  });

  test('updates player usernames when typing into player input fields', async () => {
    const user = userEvent.setup();
    render(<Main />);

    const playerCountSlider = screen.getByLabelText(/number of players:/i);

    // Change player count to 3
    fireEvent.change(playerCountSlider, { target: { value: '3' } });

    // Type into the first player input field
    const playerInputs = screen.getAllByPlaceholderText(/player \d+/i);
    await user.type(playerInputs[0], 'Karol');
    expect(playerInputs[0].value).toBe('Karol');

    // Type into the second player input field
    await user.type(playerInputs[1], 'John');
    expect(playerInputs[1].value).toBe('John');
  });
});
