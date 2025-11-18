// ComponentUnderTest.perf-test.tsx
import { View } from 'react-native';
import { measureRenders } from 'reassure';

test('Simple test', async () => {
  await measureRenders(<View />);
});
