import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export default function Header({ title, onAddPress, showForm, onBackPress }) {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {showForm ? (
          <TouchableOpacity onPress={onBackPress} style={{ marginRight: 12 }}>
            <Text style={{ color: "#007bff" }}>← Atrás</Text>
          </TouchableOpacity>
        ) : null}
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {!showForm ? (
        <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
          <Text style={styles.addButtonText}>+ Agregar</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
