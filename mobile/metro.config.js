const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../');
const packagesRoot = path.resolve(projectRoot, '../packages');

const config = getDefaultConfig(projectRoot);

// Watch the shared packages folder (not the entire monorepo, which includes
// other workspaces with different React versions)
config.watchFolders = [packagesRoot];

// Let Metro know where to resolve packages from
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// Pin react and react-native to this workspace's copies so shared packages
// (like @vega/ui) don't accidentally resolve a different React version
config.resolver.extraNodeModules = {
  react: path.resolve(projectRoot, 'node_modules/react'),
  'react-native': path.resolve(projectRoot, 'node_modules/react-native'),
};

module.exports = config;
