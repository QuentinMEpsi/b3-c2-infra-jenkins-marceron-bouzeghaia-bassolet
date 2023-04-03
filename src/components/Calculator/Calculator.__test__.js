
import {fireEvent, render, screen} from "@testing-library/react";
import Calculator from "./Calculator";

describe('Graphic test - remove button', () => {

    test('Add numbers test', () => {
        render(<Calculator />)
        const calcValue = screen.getByTestId('calcValue');

        const button1 = screen.getByTestId('button1');
        const button5 = screen.getByTestId('button5');

        expect(calcValue.textContent).toBe('---');

        expect(button5).toBeInTheDocument();
        fireEvent.click(button5);

        expect(calcValue.textContent).toBe('5');

        expect(button1).toBeInTheDocument();
        fireEvent.click(button1);
        expect(calcValue.textContent).toBe('51');
    });

    test('Cancel number test', () => {
        render(<Calculator />)

        const buttonRemove = screen.getByTestId('buttonCancel');
        const button1 = screen.getByTestId('button1');
        const button5 = screen.getByTestId('button5');
        const calcValue = screen.getByTestId('calcValue');

        fireEvent.click(button5);
        fireEvent.click(button1);

        expect(buttonRemove).toBeInTheDocument();
        fireEvent.click(buttonRemove);

        expect(calcValue.textContent).toBe('5');
    });

    test('Delete number test', () => {
        render(<Calculator />);

        const buttonDelete = screen.getByTestId('buttonDelete');
        const button1 = screen.getByTestId('button1');
        const button5 = screen.getByTestId('button5');
        const calcValue = screen.getByTestId('calcValue');

        fireEvent.click(button5);
        fireEvent.click(button1);

        expect(buttonDelete).toBeInTheDocument();
        fireEvent.click(buttonDelete);

        expect(calcValue.textContent).toBe('---');
    });

    test('Remove number test', () => {
        render(<Calculator />);

        const buttonRemove = screen.getByTestId('buttonRemove');
        const button1 = screen.getByTestId('button1');
        const button5 = screen.getByTestId('button5');
        const calcValue = screen.getByTestId('calcValue');
        const finalValue = screen.getByTestId('finalValue');

        fireEvent.click(button5);
        fireEvent.click(button1);

        expect(buttonRemove).toBeInTheDocument();
        fireEvent.click(buttonRemove);

        expect(calcValue.textContent).toBe('---');
        expect(finalValue.textContent).toBe('0');
    });

});