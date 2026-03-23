import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from '../../components/ui/Modal';


describe('Modal Component', () => {
  test('renders correctly when open', () => {
    render(<Modal isOpen={true} onClose={() => {}}><div>Modal Content</div></Modal>);
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  test('does not render when closed', () => {
    const { container } = render(<Modal isOpen={false} onClose={() => {}}><div>Modal Content</div></Modal>);
    expect(container).toBeEmptyDOMElement();
  });
});
