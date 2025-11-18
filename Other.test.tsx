import { render, screen } from '@testing-library/react-native';
import { View } from 'react-native';
describe('Some test', () => {
  it('should do something', () => {
    render(<View accessibilityRole="menu" testID="menu" />);

    expect(screen.getByTestId('menu')).toBeTruthy();
  });
});
