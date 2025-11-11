import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { styles } from "./styles/styles";
import Header from "./components/Header";
import ReportCard from "./components/ReportCard";

// Expo modules
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  // state that keeps the list of reports
  const [reports, setReports] = useState([
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
  ]);

  // UI/form state
  const [showForm, setShowForm] = useState(false);
  const [description, setDescription] = useState("");
  const [locationCoords, setLocationCoords] = useState(null);
  const [locationText, setLocationText] = useState(null);
  const [imageUri, setImageUri] = useState(null);

  // Request location permission and get current coords
  const activateLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permiso de ubicación denegado");
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocationCoords({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
      // try to get a human readable address
      try {
        const [place] = await Location.reverseGeocodeAsync({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        });
        if (place) {
          const parts = [place.name, place.street, place.city, place.region]
            .filter(Boolean)
            .join(", ");
          setLocationText(parts);
        }
      } catch (e) {
        // ignore reverse geocode errors, keep coords
        console.warn("Reverse geocode failed", e);
      }
    } catch (error) {
      console.error("Error obteniendo ubicación:", error);
      alert("No se pudo obtener la ubicación");
    }
  };

  // Open camera to take a photo
  const takePhoto = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Permiso de cámara denegado");
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        quality: 0.6,
        allowsEditing: true,
      });

      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.error("Error abriendo cámara:", error);
      alert("No se pudo abrir la cámara");
    }
  };

  // Send report: add to reports state
  const sendReport = () => {
    if (!description && !imageUri && !locationCoords) {
      alert("Agrega una descripción, ubicación o imagen antes de enviar");
      return;
    }

    const newReport = {
      id: Date.now(),
      user: "Tú",
      location: locationText
        ? locationText
        : locationCoords
        ? `Lat: ${locationCoords.latitude.toFixed(
            5
          )}, Lon: ${locationCoords.longitude.toFixed(5)}`
        : "Sin ubicación",
      time: "Ahora",
      description: description || "",
      image: imageUri || "https://via.placeholder.com/300x150?text=Sin+imagen",
    };

    setReports((prev) => [newReport, ...prev]);

    // reset form
    setDescription("");
    setLocationCoords(null);
    setImageUri(null);
    setShowForm(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={showForm ? "Nuevo Reporte" : "Feed de Reportes"}
        onAddPress={() => setShowForm((s) => !s)}
        showForm={showForm}
        onBackPress={() => setShowForm(false)}
      />

      {showForm ? (
        <View style={styles.form}>
          {/* Location section */}
          <Text style={styles.sectionLabel}>📍 Ubicación</Text>
          <TouchableOpacity
            style={styles.blueButton}
            onPress={activateLocation}
          >
            <Text style={styles.blueButtonText}>Actualizar ubicación</Text>
          </TouchableOpacity>
          <Text style={styles.addressText}>
            {locationText
              ? locationText
              : locationCoords
              ? `Lat ${locationCoords.latitude.toFixed(
                  5
                )}, Lon ${locationCoords.longitude.toFixed(5)}`
              : ""}
          </Text>

          {/* Image section */}
          <Text style={[styles.sectionLabel, { marginTop: 12 }]}>
            📸 Imagen
          </Text>
          <TouchableOpacity style={styles.dashedBox} onPress={takePhoto}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.previewImage} />
            ) : (
              <View style={styles.dashedBoxContent}>
                <Text style={styles.dashedBoxIcon}>📷</Text>
                <Text style={styles.dashedBoxText}>
                  Toca para agregar imagen
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Description */}
          <Text style={[styles.sectionLabel, { marginTop: 12 }]}>
            📝 Descripción
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Describe el problema que quieres reportar..."
            value={description}
            onChangeText={setDescription}
            multiline
          />

          <TouchableOpacity style={styles.sendButton} onPress={sendReport}>
            <Text style={styles.sendButtonText}>Enviar Reporte</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView>
          {reports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
