import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

const EvcilHayvan = ({ isim, tur }) => {
  const [aclik, setAclik] = useState(50);
  const [mutluluk, setMutluluk] = useState(50);

  const besle = () => {
    setAclik(prev => Math.max(0, prev - 20)); 
    setMutluluk(prev => Math.min(100, prev + 10)); 
  };

  const oyna = () => {
    setMutluluk(prev => Math.min(100, prev + 20)); 
    setAclik(prev => Math.min(100, prev + 15)); 
  };

  const turEmojisi = tur.toLowerCase() === 'tavşan' ? '🐰' : '🐶';
  
  const getDurum = () => {
    if (aclik > 70) return { emoji: '🥺', renk: '#FCA5A5', mesaj: 'Çok acıktım, midem gurulduyor!' };
    if (mutluluk < 30) return { emoji: '😢', renk: '#93C5FD', mesaj: 'Çok sıkıldım, oyun oynayalım...' };
    if (mutluluk > 70 && aclik < 50) return { emoji: '🥰', renk: '#A7F3D0', mesaj: 'Harika hissediyorum!' };
    return { emoji: turEmojisi, renk: '#FEF3C7', mesaj: 'Her şey yolunda.' };
  };

  const aktifDurum = getDurum();

  return (
    <View style={[styles.card, { backgroundColor: aktifDurum.renk }]}>
      <Text style={styles.petEmoji}>{aktifDurum.emoji}</Text>
      
      <Text style={styles.petName}>{isim}</Text>
      <Text style={styles.petType}>{tur}</Text>
      
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{aktifDurum.mesaj}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Açlık: %{aclik}</Text>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${aclik}%`, backgroundColor: '#EF4444' }]} />
          </View>
        </View>

        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Mutluluk: %{mutluluk}</Text>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${mutluluk}%`, backgroundColor: '#10B981' }]} />
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.feedButton]} onPress={besle}>
          <Text style={styles.buttonText}>🍖 Besle</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.playButton]} onPress={oyna}>
          <Text style={styles.buttonText}>🎾 Oyna</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Tamagotchi</Text>
      <EvcilHayvan isim="Pamuk" tur="Tavşan" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#F8FAFC',
    marginBottom: 40,
    letterSpacing: 2,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    borderRadius: 30,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  petEmoji: {
    fontSize: 80,
    marginBottom: 10,
  },
  petName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  petType: {
    fontSize: 16,
    color: '#475569',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 16,
  },
  messageBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 24,
  },
  messageText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#334155',
    fontStyle: 'italic',
  },
  statsContainer: {
    width: '100%',
    marginBottom: 24,
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 16,
    borderRadius: 20,
  },
  statRow: {
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 6,
  },
  progressBarBg: {
    height: 12,
    backgroundColor: '#CBD5E1',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  feedButton: {
    backgroundColor: '#F43F5E',
  },
  playButton: {
    backgroundColor: '#3B82F6',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
