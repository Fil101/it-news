import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { renderComponent } from 'shared/config/tests/renderComponent/renderComponent';

// TODO: renderComponent загружается не сразу, необходимо добавить async/await
describe('Sidebar', () => {
    test('test render sidebar', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test collapse sidebar', () => {
        renderComponent(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggle-button');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
