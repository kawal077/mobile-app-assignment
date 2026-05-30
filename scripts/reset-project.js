#!/usr/bin/env node

/**
 * Resets starter/demo files and ensures a minimal expo-router app shell.
 * Non-interactive — suitable for CI and assignment setup.
 */

const fs = require('fs');
const path = require('path');

const root = process.cwd();
const appDir = path.join(root, 'app');

const layoutContent = `import { Stack } from 'expo-router';

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
`;

const indexContent = `import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to build your screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
`;

const pathsToRemove = ['App.tsx', 'app-example'];

for (const relativePath of pathsToRemove) {
  const target = path.join(root, relativePath);
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
    console.log(`Removed ${relativePath}`);
  }
}

fs.mkdirSync(appDir, { recursive: true });
fs.writeFileSync(path.join(appDir, '_layout.tsx'), layoutContent);
fs.writeFileSync(path.join(appDir, 'index.tsx'), indexContent);

console.log('Project reset complete. Edit app/index.tsx and run npm start.');
