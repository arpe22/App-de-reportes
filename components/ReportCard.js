import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export default function ReportCard({ report }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.avatarPlaceholder} />
        <View style={styles.cardInfo}>
          <Text style={styles.userName}>{report.user}</Text>
          <Text style={styles.location}>{report.location}</Text>
        </View>
        <Text style={styles.time}>{report.time}</Text>
      </View>

      <Image source={{ uri: report.image }} style={styles.reportImage} />

      <Text style={styles.description}>{report.description}</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text>👍 Me gusta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>💬 Comentar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>📤 Compartir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
