import type { StackNavigationProp } from '@amazon-devices/react-navigation__stack';
import { useNavigation } from '@amazon-devices/react-navigation__native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from '@amazon-devices/react-native-safe-area-context';
import type { RootStackParamList } from '../navigation/types';
import { FEED_ITEMS } from '../data/feed';
import { Greeting, Simon } from '@vega/ui';

type HomeNav = StackNavigationProp<RootStackParamList, 'Home'>;

export function HomeScreen() {
  const navigation = useNavigation<HomeNav>();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>My Home Feed</Text>
          <Greeting name="Vega - Fire TV" />
      <Simon />
        <Pressable
          style={({ pressed, focused }: any) => [
            styles.aboutButton,
            focused && styles.aboutButtonFocused,
            pressed && styles.pressed,
          ]}
          onPress={() => navigation.navigate('About')}
          hasTVPreferredFocus
        >
          <Text style={styles.aboutButtonText}>About</Text>
        </Pressable>
      </View>
      <View style={styles.list}>
        {FEED_ITEMS.map((item) => (
          <Pressable
            key={item.id}
            style={({ pressed, focused }: any) => [
              styles.card,
              focused && styles.cardFocused,
              pressed && styles.pressed,
            ]}
            onPress={() =>
              navigation.navigate('Detail', { itemId: item.id, title: item.title })
            }
          >
            <Text style={styles.cardCategory}>{item.category}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSummary} numberOfLines={2}>
              {item.summary}
            </Text>
          </Pressable>
        ))}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2d2d44',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#eee',
  },
  aboutButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#3d3d5c',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  aboutButtonFocused: {
    borderColor: '#22d3ee',
  },
  aboutButtonText: {
    color: '#eee',
    fontSize: 14,
    fontWeight: '600',
  },
  list: {
    flex: 1,
    padding: 48,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#252540',
    borderRadius: 16,
    padding: 28,
    borderWidth: 3,
    borderColor: '#2d2d44',
    width: '46%',
    marginBottom: 40,
  },
  cardFocused: {
    borderColor: '#22d3ee',
    transform: [{ scale: 1.04 }],
  },
  pressed: {
    opacity: 0.8,
  },
  cardCategory: {
    fontSize: 22,
    fontWeight: '600',
    color: '#a78bfa',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 34,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  cardSummary: {
    fontSize: 24,
    color: '#9ca3af',
    lineHeight: 32,
  },
});
