import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}
