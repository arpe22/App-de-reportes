import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles/styles";
import Header from "./components/Header";
import ReportCard from "./components/ReportCard";

export default function App() {
  const reports = [
    {
      id: 1,
      user: "Ana García",
      location: "Centro de la ciudad",
      time: "Hace 2 horas",
      description: "Problema con el alumbrado público en la calle principal",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      user: "Carlos Mendoza",
      location: "Parque Central",
      time: "Hace 4 horas",
      description: "Basura acumulada en los contenedores del parque",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Feed de Reportes" />
      <ScrollView>
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
