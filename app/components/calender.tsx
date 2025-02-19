import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [newEvent, setNewEvent] = useState('');
  const [newEventTime, setNewEventTime] = useState('');

  // Handle scheduling a new event
  const handleScheduleEvent = () => {
    if (!selectedDate || !newEvent || !newEventTime) {
      Alert.alert('Error', 'Please select a date, enter an event, and specify the time.');
      return;
    }

    const eventKey = `${selectedDate}-${newEvent}`;
    setEvents((prevEvents) => ({
      ...prevEvents,
      [eventKey]: {
        date: selectedDate,
        event: newEvent,
        time: newEventTime,
      },
    }));

    // Reset inputs
    setSelectedDate(null);
    setNewEvent('');
    setNewEventTime('');
    Alert.alert('Success', 'Event scheduled successfully!');
  };

  // Render scheduled events
  const renderScheduledEvents = () => {
    return Object.values(events).map((event, index) => (
      <View key={index} style={styles.scheduledEvent}>
        <Icon name="clock" size={16} color="#14532D" />
        <Text style={styles.eventText}>
          {event.time}, {event.event}
        </Text>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Calendar Section */}
        <View style={styles.calendarSection}>
          <Text style={styles.sectionTitle}>Schedule your medication</Text>

          {/* Calendar */}
          <Calendar
            onDayPress={(day) => setSelectedDate(day.dateString)}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: '#10B981' },
            }}
            theme={{
              selectedDayBackgroundColor: '#10B981',
              todayTextColor: '#14532D',
              arrowColor: '#14532D',
            }}
          />

          {/* Event Input */}
          <View style={styles.eventInputContainer}>
            <TextInput
              style={styles.eventInput}
              placeholder="Enter event (e.g., Paracetamol)"
              value={newEvent}
              onChangeText={setNewEvent}
            />
            <TextInput
              style={styles.eventInput}
              placeholder="Enter time (e.g., 9 AM)"
              value={newEventTime}
              onChangeText={setNewEventTime}
            />
            <TouchableOpacity style={styles.scheduleButton} onPress={handleScheduleEvent}>
              <Text style={styles.scheduleButtonText}>Schedule Event</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Scheduled Events */}
        <View style={styles.scheduledEventsSection}>
          <Text style={styles.sectionTitle}>Scheduled Events</Text>
          {Object.keys(events).length > 0 ? (
            renderScheduledEvents()
          ) : (
            <Text style={styles.noEventsText}>No events scheduled yet.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginHorizontal: 16,
    marginTop: 16,
  },
  calendarSection: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  eventInputContainer: {
    marginTop: 16,
  },
  eventInput: {
    height: 48,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#1F2937',
  },
  scheduleButton: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  scheduleButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  scheduledEventsSection: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  scheduledEvent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
  },
  eventText: {
    fontSize: 14,
    color: '#14532D',
    marginLeft: 8,
  },
  noEventsText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default Calender;