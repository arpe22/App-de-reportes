import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    marginRight: 10,
  },
  cardInfo: {
    flex: 1,
  },
  userName: {
    fontWeight: "bold",
  },
  location: {
    color: "#777",
  },
  time: {
    color: "#777",
    fontSize: 12,
  },
  reportImage: {
    width: "100%",
    height: 150,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
    color: "#333",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  /* Add-report form styles */
  form: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  formLabel: {
    fontWeight: "600",
    marginBottom: 6,
  },
  sectionLabel: {
    fontWeight: "600",
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 8,
    minHeight: 60,
    textAlignVertical: "top",
    marginBottom: 10,
  },
  formButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  smallButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  smallButtonText: {
    color: "#333",
  },
  locationText: {
    marginBottom: 8,
    color: "#555",
    fontSize: 12,
  },
  previewImage: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: "#28a745",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
    width: "100%",
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  /* New styles for location button and dashed box */
  blueButton: {
    backgroundColor: "#0b71ff",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  blueButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  addressText: {
    color: "#999",
    fontSize: 12,
    marginTop: 6,
  },
  dashedBox: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#DDD",
    borderRadius: 10,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#fafafa",
  },
  dashedBoxContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  dashedBoxIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  dashedBoxText: {
    color: "#777",
  },
});
